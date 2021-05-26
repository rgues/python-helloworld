import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { UserService } from '../../user/service/user.service';
import { TontineService } from './tontine.service';


@Injectable({
  providedIn: 'root'
})
export class TontineGlobalDataService {

  userName: string;
  status: string;

  constructor(
    public api: ApiService,
    private tontine: TontineService,
    private util: UtilService,
    private userService: UserService,
    private location: TranslateService
  ) {
  }

  // Remove space
  removeSpace(input: string) {
    const inputData = String(input);
    return inputData.replace(/\s/g, "");
  }

  // Check is value is a valid date
  isValidDate(d) {
    return d instanceof Date && !isNaN(d.getTime());
  }

  // Get numbers of occurency daynames in a month
  numDaysInMonth(m, y, t) {
    var days = new Date(y, m, 0).getDate();
    var numdays = [t - (new Date(m + '/01/' + y).getDay())];
    for (var i = numdays[0] + 7; i <= days; i += 7) {
      numdays.push(i);
    }
    return numdays;
  }

  // Get days difference
  getDayDif(day: string) {
    let dif = 0;
    switch (day) {
      case 'Monday':
        dif = 2;
        break;
      case 'Tuesday':
        dif = 3;
        break;
      case 'Wednesday':
        dif = 4;
        break;
      case 'Thursday':
        dif = 5;
        break;
      case 'Friday':
        dif = 6;
        break;
      case 'Saturday':
        dif = 7;
        break;
      case 'Sunday':
        dif = 8;
        break;
      default:
        break;
    }
    return dif;
  }

  // check if session is already in array
  notIn(data: any, liste: any) {
    let i = 0;
    let isIn = false;
    if (liste && liste.length > 0) {
      while (!isIn && i < liste.length) {
        if (liste && liste[i].numero_cycle === data.numero_cycle && liste[i].numero_seance === data.numero_seance) {
          isIn = true;
        }
        i++;
      }
    }
    return isIn;
  }




  // Get day Translation 
  getDayTranslation(day: string) {
    return new Observable(subscriber => {
      this.location.get(['MondayLabel', 'TuesdayLabel', 'WednesdayLabel', 'ThursdayLabel', 'FridayLabel', 'SaturdayLabel', 'SundayLabel']).subscribe(data => {
        switch (day) {
          case 'Monday':
            subscriber.next(data.MondayLabel);
            break;
          case 'Tuesday':
            subscriber.next(data.TuesdayLabel);
            break;
          case 'Wednesday':
            subscriber.next(data.WednesdayLabel);
            break;
          case 'Thursday':
            subscriber.next(data.ThursdayLabel);
            break;
          case 'Friday':
            subscriber.next(data.FridayLabel);
            break;
          case 'Saturday':
            subscriber.next(data.SaturdayLabel);
            break;
          case 'Sunday':
            subscriber.next(data.SundayLabel);
            break;
          default:
            subscriber.next(day);
            break;
        }
      });

    });

  }

  // Get the minimum number of share
  getMinNumberShareMember(members: any) {
    let minShare = 1;
    const membersOccurs = [];
    if (members && members.length > 0) {
      while (members.length > 0) {
        let member = members[0];
        let nbOccur = this.util.occurenceOfId(members, 'id', member.id);
        // has number of share of all users
        membersOccurs.push(nbOccur);
        for (let i = 0; i < nbOccur; i++) {
          members = this.util.removeIdOccurence(members, 'id', member.id)
        }
      }
      // get the max share value
      minShare = this.util.occurenceMax(membersOccurs);
    }
    return minShare;
  }

  // Get the max number of batches
  getMaxNumberOfBatches(maxShareMember: number) {
    let nbBatches = 1;
    const nbSharesStokvel = this.getNumberShareStokvel();
    if (maxShareMember > 0) {
      nbBatches = Math.ceil(nbSharesStokvel / maxShareMember);
    }
    return nbBatches;
  }

  // Get the number of share stokvel
  getNumberShareStokvel() {
    let members = 0;
    let minShare = 1;
    const tontineData = this.tontine.getCurrentTontineData();
    if (tontineData && tontineData.membres && tontineData.membres.nombre_membre) {
      members = tontineData.membres.nombre_membre
    }
    members > 0 ? (minShare = members) : (minShare = 1);
    return minShare;
  }

  // Get the  part of a user
  getListPart(members: any, memberId: number) {
    const nbPart = [];
    if (members && members.length > 0) {
      members.forEach(member => {
        if (member.id === memberId) {
          nbPart.push({ numero_part: member.numero_part });
        }
      });
    }
    return nbPart;
  }

  // Get the number of  part of a user
  getNumberPart(members: any, memberId: number) {
    let listPart = this.getListPart(members, memberId);
    return listPart && listPart.length > 0 ? listPart.length : 0;
  }

  // Convert to Integer
  ConvertToInt(val) {
    return parseInt(val ? val : 0);
  }

  // Convert to float
  ConvertToFloat(val) {
    return parseFloat(val ? val : 0).toFixed(2);
  }

  SumFloat(val1, val2) {
    let Total = parseFloat(val1 ? val1 : 0) + parseFloat(val2 ? val2 : 0);
    return Total.toFixed(2);
  }

  // Get format time bid
  getFormatTimeBid(type: string) {
    switch (type) {
      case 'jours':
        return 'DAY_TEXT';

      case 'heures':
        return 'H.';

      case 'minutes':
        return 'Min.';

      case 'secondes':
        return 'Sec.';

      default:
        return type;
    }
  }

  // Get the amount of contribution of the seance
  getPourcentageCurrentBid(MisePrix: any, currentBid: any) {
    const pourcentageValue = parseFloat(((parseFloat(currentBid) * 100) / (parseFloat(MisePrix))).toFixed(2));
    return pourcentageValue;
  }

  // Check if a member has contributed for the seance
  checkMemberContributionSeance(memberList: any) {
    let contributeStatus = false;
    const user = this.userService.getUserData();
    memberList.forEach(member => {
      if (parseInt(member.id) === parseInt(user.id) && member.montant_cotisation !== 0) {
        contributeStatus = true;
      }
    });
    return contributeStatus;
  }

  // Check if the member has already bid for a bacth on seance
  hasBidForBatecheSession(key1, key2, arr) {
    if (!arr || (arr.constructor !== Array && arr.constructor !== Object)) {
      return false;
    }
    let not_found = true;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i].searchIndex === key1) {
        if (arr[i].numero_lot !== key2) {
          not_found = false;
        }
        else {
          not_found = true;
        }
      }
    }
    return not_found;
  }

  // Get the name of the creator
  getCreatorName(memberList: any, creatorId: any) {
    if (memberList && memberList.length > 0) {
      memberList.forEach(member => {
        if (member && parseInt(member.id) === parseInt(creatorId)) {
          this.userName = member.firstname + ' ' + member.lastname;
        }
      });
    } else {
      this.userName = '';
    }
    return this.userName;
  }

  // Member Not in the list of members
  memberNotInWithout(memberData: any, idMember: number) {
    let found = true;
    memberData.forEach(member => {
      if (String(member.id) === String(idMember)) {
        found = false;
      }
    });
    return found;
  }

  // Member Not in the list of members
  notInWithAmount(user: any, memberData: any) {
    let found = false;
    memberData.forEach(member => {
      if (String(member.user_id) === String(user.user_id) && member.montant === user.montant) {
        found = true;
      }
    });
    return found;
  }

  // Member Not in the list of members
  memberNotIn(memberList: any, memberData: any) {
    let found = true;
    memberList.forEach(member => {
      if (String(member.id) === String(memberData.id) && member.numero_part === memberData.numero_part) {
        found = false;
      }
    });
    return found;
  }

  // Member Not in the list of members
  memberNotInWithCoutShareAndWithShare(memberData: any, user: any) {
    let found = true;
    memberData.forEach(member => {
      if (String(member.user_id) === String(user.user_id) && member.numero_part === user.numero_part && member.coutshare === user.coutshare) {
        found = false;
      }
    });
    return found;
  }

  // Has the user contribute
  hasContribute(members: any, memberId: any) {
    let isContribute = false;
    members.forEach(member => {
      if (member && parseInt(member.id) === parseInt(memberId)) {
        isContribute = member.montant_cotisation === 0 ? false : true;
      }
    });
    return isContribute;
  }


  // is the users is admin
  isMemberAdmin(members: any, memberId: any) {
    let admin = false;
    members.forEach(member => {
      if (member && parseInt(member.id) === parseInt(memberId) && member.administrator === 1) {
        admin = true;
      }
    });
    return admin;
  }

  // Get the amount of contribution of the seance
  getAmountContributionSeance(memberList: any, shareAmount: any, userId: number) {
    let nbShare = 0;
    memberList.forEach(member => {
      if (member.id === userId && member.pourcentage_cotisation !== 100) {
        nbShare++;
      }
    });
    const montantSeance = nbShare > 0 ? (parseInt(shareAmount, 10) * nbShare) : parseInt(shareAmount, 10);
    return montantSeance;
  }

  // get contribution amaount
  getContributionAmount(amount: any, share: any) {
    const amountValue = amount ? parseFloat(amount) : 0;
    const shareValue = share ? parseFloat(share) : 1;
    return Number(amountValue * shareValue).toFixed(2);
  }

  // Show the contribution button
  canShowContributionButton(memberList: any[], userId: any) {
    let showContributionBtn = true;
    memberList.forEach(member => {
      if (parseInt(member.id) === parseInt(userId) && member.active === 0) {
        showContributionBtn = false;
      }
    });
    return showContributionBtn;
  }

  // Check if a member can contribute for a seance
  canContributeSeance(memberList: any[], userId: any) {
    let canContribute = true;
    memberList.forEach(member => {
      if (parseInt(member.id) === parseInt(userId)) {
        member.pourcentage_cotisation === 100 ? canContribute = false : canContribute = true;
      }
    });
    return canContribute;
  }

  // validate the bid increment
  validateIncrement(myPin: string) {
    const regex = /^[0-9]+$/;
    if (!regex.test(myPin)) {
      return true;
    } else {
      return false;
    }
  }

  // validate the mis a prix
  validateMisaPrix(miseAprix: string) {
    const regex = /^[-]?\d*$/;
    if (!regex.test(miseAprix)) {
      return true;
    } else {
      return false;
    }
  }

  // Get float amount
  getFloatNumber(amount: any) {
    let value = 0;
    if (amount) {
      value = parseFloat(amount);
    }
    return value;
  }

  // check if the user has confirmed the payment
  checkConfirmation(data: any) {
    let hasConfirm = true;
    if (data && data.proof[0].liste_traditional_banking_proof) {
      data.proof[0].liste_traditional_banking_proof.forEach(proof => {
        if (proof.confirm_member === 0) {
          hasConfirm = false;
        }
      });
    }

    if (hasConfirm && data && data.proof[0].liste_online_wallet_proof) {
      data.proof[0].liste_online_wallet_proof.forEach(proof => {
        if (proof.confirm_member === 0) {
          hasConfirm = false;
        }
      });
    }
    return hasConfirm;
  }

  // Get the status
  getStatus(data: any) {
    if (this.checkConfirmation(data)) {
      this.location.get(['CONFIRM_TEXT']).subscribe(trans => {
        this.status = trans.CONFIRM_TEXT;
      });
    } else {
      this.location.get(['NOT_CONFIRM']).subscribe(trans => {
        this.status = trans.NOT_CONFIRM;
      });
    }
    return this.status;
  }

  // get the current member previous seance contribution  data
  getCurrentMemberPreviousSeanceData(seances: any, currentSeance: any) {
    const seanceData = seances.filter(data => { return (parseInt(data.numero_seance) === parseInt(currentSeance.numero_seance) - 1) && data.typecontribution_id === 2 });
    return seanceData;
  }

  // get total contribution of previous seance
  getPreviousSeanceContribution(seances: any) {
    let contributionAmount = 0;
    if (seances && seances.length > 0) {
      seances.forEach(data => {
        contributionAmount += parseFloat(data.montant);
      });
    }
    return contributionAmount;
  }

  // get date string
  getDate(dateTime: any, key: string) {
    return dateTime && dateTime[key] ? dateTime[key].split(' ')[0] : '';
  }

  // Get nb validators
  getValidators(tontineData: any) {
    return tontineData && tontineData.number_admin_that_validates_contributions ? tontineData.number_admin_that_validates_contributions : 1;
  }

  // check if it's trqditionnal tontine 
  isTraditionnalTontine(tontineData: any) {
    return tontineData && tontineData.tontine_payment_type_id === 1;
  }

  getSize(tontineData: any) {
    if (tontineData && (tontineData.drawingtype_id === 6 || tontineData.tontine_payment_type_id === 1)) {
      return 3;
    } else {
      return 4;
    }
  }

  filterTontineBalance(balances: any[], tontineData: any) {
    return balances.filter(caisse => {
      return !this.isTraditionnalTontine(tontineData) && caisse.caisse_name !== 'caisse emprunt'
        || (this.isTraditionnalTontine(tontineData) || tontineData.drawingtype_id === 6)
    });
  }


  // check if a member is administrator of a tontine
  isAdministrator(tontineData: any) {
    return tontineData && tontineData.administrator === 1;
  }

  // validate caution
  isCautionValid(formData: any) {
    if (!formData.with_caution) {
      return true;
    } else if (formData.with_caution && formData.caution_amount > 0) {
      return true;
    } else {
      return false;
    }
  }

  updateCaution(data: any) {
    let formData = data;
    formData.with_caution = formData.with_caution ? 1 : 0;
    if (formData.with_caution === 0) {
      formData.type_caution = null;
      formData.caution_amount = null;
    }
    return formData;
  }

  hasTontineCaution(tontineData: any) {
    return tontineData && tontineData.caution_id && tontineData.caution_amount && parseFloat(tontineData.caution_amount) > 0;
  }

  hasTontineCycle(tontineData: any) {
    return tontineData && tontineData.cycle_courant && tontineData.cycle_courant.id;
  }

  // get the caution amount
  getCautionAmount(tontineData: any, members: any[], userId: number) {
    let nbPart = this.getNumberPart(members, userId);
    const caution = tontineData.caution_amount ? parseFloat(tontineData.caution_amount) : 0;
    if (tontineData.caution_type && tontineData.caution_type === 'member') {
      return caution;
    } else {
      return caution * nbPart;
    }
  }

  // Get the current part to bid
  getCurrentBidPart(listPart: any[], userId: any, members: any[]) {
    const nbPart = this.getNumberPart(listPart, userId);
    let numeroPart = 1;
    if (members && members.length > 0) {
      for (let k = 0; k < members.length; k++) {
        if (members[k].id === userId && numeroPart !== nbPart) {
          numeroPart++;
        }
      }
    }
    return numeroPart;
  }

}

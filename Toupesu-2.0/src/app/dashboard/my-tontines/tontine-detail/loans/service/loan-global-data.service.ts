import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LoanGlobalDataService {

  constructor(
    private translate: TranslateService
  ) {
  }

  // remeove space
  removeSpace(inputData: any) {
    const input = String(inputData);
    return input.replace(/\s/g, "");
  }

  // Get numbers members
  getNbMembres(members: any[]) {
    return members ? members.length : 0;
  }

  // get the cumule of loan due
  getLoanDueAmount(allData: any) {
    if (allData && allData.length > 0) {
      let total = 0;
      allData.forEach(data => {
        total += parseFloat(data.loan_due);
      });
      return total;
    } else {
      return 0;
    }
  }

  // get the cumule of loan paid
  getLoanPaidAmount(allData: any) {
    if (allData && allData.length > 0) {
      let total = 0;
      allData.forEach(data => {
        total += parseFloat(data.loan_paid);
      });
      return total;
    } else {
      return 0;
    }
  }

  // get interest generate
  getInterestGenerate(allData: any) {
    if (allData && allData.length > 0) {
      let total = 0;
      allData.forEach(data => {
        total += parseFloat(data.interest_generate);
      });
      return total;
    } else {
      return 0;
    }
  }


  // Get all amount of a loan seance
  getLoanSeanceAmount(loanDue: any) {
    if (loanDue) {
      let sumAmount = 0;
      loanDue.credit_line_approve.forEach(data => {
        sumAmount += data.amount;
      });

      loanDue.credit_line_paid.forEach(data => {
        sumAmount += data.amount;
      });

      return sumAmount;
    } else {
      return 0;
    }
  }

  // Get all amount of a loan seance
  getInterestDueAmount(loanDue: any) {
    if (loanDue) {
      let sumAmount = 0;
      loanDue.interests_due.forEach(data => {
        sumAmount += data.amount_interest;
      });

      loanDue.interests_due_paid.forEach(data => {
        sumAmount += data.amount_interest;
      });

      return sumAmount;
    } else {
      return 0;
    }
  }

  isSeanceNotIn(cycleId: any, seanceId: any, listSeance: any[]) {
    let isIn = false;
    listSeance.forEach(data => {
      if (`${cycleId}${seanceId}` === data) {
        isIn = true;
      }
    });
    return isIn;
  }

  // check if value not in
  checkNotIn(value: string, data: any) {
    let notIn = false;
    data.forEach(item => {
      if (String(item.label) === String(value)) {
        notIn = true;
      }
    });
    return notIn;
  }

    // Check user contribution
    hasContributeSeance(formData, userId: any) {
      let hasContribute = false;
      let contribution = 0 ;
      let nbShare = 0;
      if (formData && formData.membres && formData.membres.liste_membre) {
        const memberList = formData.membres.liste_membre;
        memberList.forEach(member => {
          if (parseInt(member.id) === parseInt(userId)) {
            contribution += member.montant_cotisation ;
            nbShare++;
          }
        });
      }
      const toContribute  = nbShare * formData.tontine.coutshare;
      if (toContribute === contribution &&  toContribute > 0) {
        hasContribute = true;
      } 
      return hasContribute;
    }


    selectPoolData(allLoansData: any[]) {
      const seanceData = [];
      let i = 0;
      allLoansData.forEach(loan => {
        this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
          seanceData.push({
            name: 'radio' + i,
            label: `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.numero_cycle}/${loan.numero_seance}`,
            type: 'radio',
            value: `${loan.numero_cycle}#${loan.numero_seance}`,
            checked: false
          });
        });
        i++;
      });
      return seanceData;
    }

    selectPoolDataLoanHistory(allLoansData: any[]) {
      const seanceData = [];
      let i = 0, currentParam = '';
      allLoansData.forEach(loan => {
        this.translate.get(['CYCLE_TEXT', 'SESSION_TEXT']).subscribe(trans => {
          currentParam = `${trans.CYCLE_TEXT}/${trans.SESSION_TEXT} : ${loan.data.infos_cycle.numerocycle}/${loan.data.infos_seance.numero_seance}`;
          if (!this.checkNotIn(currentParam, seanceData)) {
            seanceData.push({
              name: 'radio' + i,
              label: currentParam,
              type: 'radio',
              value: `${loan.data.infos_cycle.numerocycle}#${loan.data.infos_seance.numero_seance}`,
              checked: false
            });
            i++;
          }
        });
      });
      return seanceData;
    }

}

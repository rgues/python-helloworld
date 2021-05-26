(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~my-tontines-my-tontines-module~my-tontines-tontine-detail-tontine-detail-module~my-tontines-~ff41dc51"],{

/***/ "Ez5k":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/services/tontine-global-data.service.ts ***!
  \*******************************************************************************/
/*! exports provided: TontineGlobalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineGlobalDataService", function() { return TontineGlobalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/api.service */ "6rCG");
/* harmony import */ var src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/util.service */ "6wVa");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/service/user.service */ "6Hie");
/* harmony import */ var _tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tontine.service */ "/WEl");








let TontineGlobalDataService = class TontineGlobalDataService {
    constructor(api, tontine, util, userService, location) {
        this.api = api;
        this.tontine = tontine;
        this.util = util;
        this.userService = userService;
        this.location = location;
    }
    // Remove space
    removeSpace(input) {
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
    getDayDif(day) {
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
    notIn(data, liste) {
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
    getDayTranslation(day) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
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
    getMinNumberShareMember(members) {
        let minShare = 1;
        const membersOccurs = [];
        if (members && members.length > 0) {
            while (members.length > 0) {
                let member = members[0];
                let nbOccur = this.util.occurenceOfId(members, 'id', member.id);
                // has number of share of all users
                membersOccurs.push(nbOccur);
                for (let i = 0; i < nbOccur; i++) {
                    members = this.util.removeIdOccurence(members, 'id', member.id);
                }
            }
            // get the max share value
            minShare = this.util.occurenceMax(membersOccurs);
        }
        return minShare;
    }
    // Get the max number of batches
    getMaxNumberOfBatches(maxShareMember) {
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
            members = tontineData.membres.nombre_membre;
        }
        members > 0 ? (minShare = members) : (minShare = 1);
        return minShare;
    }
    // Get the  part of a user
    getListPart(members, memberId) {
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
    getNumberPart(members, memberId) {
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
    getFormatTimeBid(type) {
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
    getPourcentageCurrentBid(MisePrix, currentBid) {
        const pourcentageValue = parseFloat(((parseFloat(currentBid) * 100) / (parseFloat(MisePrix))).toFixed(2));
        return pourcentageValue;
    }
    // Check if a member has contributed for the seance
    checkMemberContributionSeance(memberList) {
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
    getCreatorName(memberList, creatorId) {
        if (memberList && memberList.length > 0) {
            memberList.forEach(member => {
                if (member && parseInt(member.id) === parseInt(creatorId)) {
                    this.userName = member.firstname + ' ' + member.lastname;
                }
            });
        }
        else {
            this.userName = '';
        }
        return this.userName;
    }
    // Member Not in the list of members
    memberNotInWithout(memberData, idMember) {
        let found = true;
        memberData.forEach(member => {
            if (String(member.id) === String(idMember)) {
                found = false;
            }
        });
        return found;
    }
    // Member Not in the list of members
    notInWithAmount(user, memberData) {
        let found = false;
        memberData.forEach(member => {
            if (String(member.user_id) === String(user.user_id) && member.montant === user.montant) {
                found = true;
            }
        });
        return found;
    }
    // Member Not in the list of members
    memberNotIn(memberList, memberData) {
        let found = true;
        memberList.forEach(member => {
            if (String(member.id) === String(memberData.id) && member.numero_part === memberData.numero_part) {
                found = false;
            }
        });
        return found;
    }
    // Member Not in the list of members
    memberNotInWithCoutShareAndWithShare(memberData, user) {
        let found = true;
        memberData.forEach(member => {
            if (String(member.user_id) === String(user.user_id) && member.numero_part === user.numero_part && member.coutshare === user.coutshare) {
                found = false;
            }
        });
        return found;
    }
    // Has the user contribute
    hasContribute(members, memberId) {
        let isContribute = false;
        members.forEach(member => {
            if (member && parseInt(member.id) === parseInt(memberId)) {
                isContribute = member.montant_cotisation === 0 ? false : true;
            }
        });
        return isContribute;
    }
    // is the users is admin
    isMemberAdmin(members, memberId) {
        let admin = false;
        members.forEach(member => {
            if (member && parseInt(member.id) === parseInt(memberId) && member.administrator === 1) {
                admin = true;
            }
        });
        return admin;
    }
    // Get the amount of contribution of the seance
    getAmountContributionSeance(memberList, shareAmount, userId) {
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
    getContributionAmount(amount, share) {
        const amountValue = amount ? parseFloat(amount) : 0;
        const shareValue = share ? parseFloat(share) : 1;
        return Number(amountValue * shareValue).toFixed(2);
    }
    // Show the contribution button
    canShowContributionButton(memberList, userId) {
        let showContributionBtn = true;
        memberList.forEach(member => {
            if (parseInt(member.id) === parseInt(userId) && member.active === 0) {
                showContributionBtn = false;
            }
        });
        return showContributionBtn;
    }
    // Check if a member can contribute for a seance
    canContributeSeance(memberList, userId) {
        let canContribute = true;
        memberList.forEach(member => {
            if (parseInt(member.id) === parseInt(userId)) {
                member.pourcentage_cotisation === 100 ? canContribute = false : canContribute = true;
            }
        });
        return canContribute;
    }
    // validate the bid increment
    validateIncrement(myPin) {
        const regex = /^[0-9]+$/;
        if (!regex.test(myPin)) {
            return true;
        }
        else {
            return false;
        }
    }
    // validate the mis a prix
    validateMisaPrix(miseAprix) {
        const regex = /^[-]?\d*$/;
        if (!regex.test(miseAprix)) {
            return true;
        }
        else {
            return false;
        }
    }
    // Get float amount
    getFloatNumber(amount) {
        let value = 0;
        if (amount) {
            value = parseFloat(amount);
        }
        return value;
    }
    // check if the user has confirmed the payment
    checkConfirmation(data) {
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
    getStatus(data) {
        if (this.checkConfirmation(data)) {
            this.location.get(['CONFIRM_TEXT']).subscribe(trans => {
                this.status = trans.CONFIRM_TEXT;
            });
        }
        else {
            this.location.get(['NOT_CONFIRM']).subscribe(trans => {
                this.status = trans.NOT_CONFIRM;
            });
        }
        return this.status;
    }
    // get the current member previous seance contribution  data
    getCurrentMemberPreviousSeanceData(seances, currentSeance) {
        const seanceData = seances.filter(data => { return (parseInt(data.numero_seance) === parseInt(currentSeance.numero_seance) - 1) && data.typecontribution_id === 2; });
        return seanceData;
    }
    // get total contribution of previous seance
    getPreviousSeanceContribution(seances) {
        let contributionAmount = 0;
        if (seances && seances.length > 0) {
            seances.forEach(data => {
                contributionAmount += parseFloat(data.montant);
            });
        }
        return contributionAmount;
    }
    // get date string
    getDate(dateTime, key) {
        return dateTime && dateTime[key] ? dateTime[key].split(' ')[0] : '';
    }
    // Get nb validators
    getValidators(tontineData) {
        return tontineData && tontineData.number_admin_that_validates_contributions ? tontineData.number_admin_that_validates_contributions : 1;
    }
    // check if it's trqditionnal tontine 
    isTraditionnalTontine(tontineData) {
        return tontineData && tontineData.tontine_payment_type_id === 1;
    }
    getSize(tontineData) {
        if (tontineData && (tontineData.drawingtype_id === 6 || tontineData.tontine_payment_type_id === 1)) {
            return 3;
        }
        else {
            return 4;
        }
    }
    filterTontineBalance(balances, tontineData) {
        return balances.filter(caisse => {
            return !this.isTraditionnalTontine(tontineData) && caisse.caisse_name !== 'caisse emprunt'
                || (this.isTraditionnalTontine(tontineData) || tontineData.drawingtype_id === 6);
        });
    }
    // check if a member is administrator of a tontine
    isAdministrator(tontineData) {
        return tontineData && tontineData.administrator === 1;
    }
    // validate caution
    isCautionValid(formData) {
        if (!formData.with_caution) {
            return true;
        }
        else if (formData.with_caution && formData.caution_amount > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    updateCaution(data) {
        let formData = data;
        formData.with_caution = formData.with_caution ? 1 : 0;
        if (formData.with_caution === 0) {
            formData.type_caution = null;
            formData.caution_amount = null;
        }
        return formData;
    }
    hasTontineCaution(tontineData) {
        return tontineData && tontineData.caution_id && tontineData.caution_amount && parseFloat(tontineData.caution_amount) > 0;
    }
    hasTontineCycle(tontineData) {
        return tontineData && tontineData.cycle_courant && tontineData.cycle_courant.id;
    }
    // get the caution amount
    getCautionAmount(tontineData, members, userId) {
        let nbPart = this.getNumberPart(members, userId);
        const caution = tontineData.caution_amount ? parseFloat(tontineData.caution_amount) : 0;
        if (tontineData.caution_type && tontineData.caution_type === 'member') {
            return caution;
        }
        else {
            return caution * nbPart;
        }
    }
    // Get the current part to bid
    getCurrentBidPart(listPart, userId, members) {
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
};
TontineGlobalDataService.ctorParameters = () => [
    { type: src_app_shared_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TontineGlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TontineGlobalDataService);



/***/ }),

/***/ "YAE/":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/services/tontine-error.service.ts ***!
  \*************************************************************************/
/*! exports provided: TontineErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TontineErrorService", function() { return TontineErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");




let TontineErrorService = class TontineErrorService {
    constructor(ui, translate) {
        this.ui = ui;
        this.translate = translate;
    }
    manageTontineError(error) {
        if (error && error.error && error.error.numberlot_is_greather_than_number_rest_beneficiairy) {
            this.translate.get('NB_BATCHES_ERROR_MSG').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.user_not_exist) {
            this.translate.get('USER_DETAIL_MSG2').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.tontine_already_exist) {
            this.translate.get('TONTINE_ALREADY_EXIST').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.remplir_tous_les_champs_required) {
            this.translate.get('TONTINE_PENALTY_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.tontine_not_found) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.dureesurleretard_greater_than_date_fin) {
            this.translate.get(['TONTINE_BID_ERROR1']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR1']}`);
            });
        }
        if (error && error.error && error.error.timedebutbid_less_than_timedebutseance) {
            this.translate.get(['TONTINE_BID_ERROR2']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR2']}`);
            });
        }
        if (error && error.error && error.error.timefinbid_greater_than_timefinseance) {
            this.translate.get(['TONTINE_BID_ERROR3']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR3']}`);
            });
        }
        if (error && error.error && error.error.dureeseance_greather_than_periodicite) {
            this.translate.get(['TONTINE_BID_ERROR4']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR4']}`);
            });
        }
        if (error && error.error && error.error.timedebutbid_greather_than_timefinseance) {
            this.translate.get(['TONTINE_BID_ERROR5']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR5']}`);
            });
        }
        if (error && error.error && error.error.timedebutbid_greater_than_timefinbid) {
            this.translate.get(['TONTINE_BID_ERROR6']).subscribe(value => {
                this.ui.presentToast(`${value['TONTINE_BID_ERROR6']}`);
            });
        }
        if (error && error.error && error.error.tontine_id_not_exist) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.remplir_tous_les_champs) {
            this.translate.get('DEBT_PARAMETER_NOTFOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_not_authorize) {
            this.translate.get('TONTINE_USERS_MSG6').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.facture_id_not_exist) {
            this.translate.get('DEBT_FACTURE_ID_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.reference_proof_not_correspond_to_traditional_banking) {
            this.translate.get('DEBT_PAYMENT_NOT_TRADI_BANKING').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.receipt_is_already_approved) {
            this.translate.get('DEBT_BILL_HAS_BEEN_ALREADY_APPROVED').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.device_id_not_exist) {
            this.translate.get('CURRENCY_REQUIRED').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.seance_id_not_exist) {
            this.translate.get('DEBT_SEANCE_NOTFOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.device_id_not_match_device_id_tontine) {
            this.translate.get('DEBT_CURRENCY_NOTFOUND').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.typecontribution_id_not_exist) {
            this.translate.get('TONTINE_PENALTY_MSG9').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.facture_is_already_approved_by_this_admin) {
            this.translate.get('DEBT_ALREADY_AUTHORIZE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_id_not_exist) {
            this.translate.get('USER_NOT_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.date_seance_is_greater_than_today_date) {
            this.translate.get('POOL_DATE_GREAT_TODAY').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.date_seance_already_exist) {
            this.translate.get('POOL_DATE_ALREADY_EXIST').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.number_lot_not_match_length_list_member) {
            this.translate.get('NB_BATCH_NOT_MATCH_BENEFICIARY').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.this_member_has_already_bouffe) {
            this.translate.get('ALREADY_JACKPOT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.date_seance_is_equal_to_date_debut_tontine) {
            this.translate.get('POOL_DATE_EQUAL_STOKVEL_DATE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.la_tontine_a_plus_d_une_seance) {
            this.translate.get('ADD_SHARE_MSG8').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.parameter_not_found) {
            this.translate.get('ADD_SHARE_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.nbre_part_greater_than_part_max_member) {
            this.translate.get('ADD_SHARE_MSG5').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.user_is_not_authorized) {
            this.translate.get('ADD_SHARE_MSG6').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.user_id_not_exist) {
            this.translate.get('ADD_SHARE_MSG7').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.remplir_tous_les) {
            this.translate.get('TONTINE_USERS_MSG3').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.tontine_not_exist) {
            this.translate.get('TONTINE_USERS_MSG4').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.member_not_exist) {
            this.translate.get('TONTINE_USERS_MSG5').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.user_not_authorised) {
            this.translate.get('TONTINE_USERS_MSG6').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error && error.error && error.error.number_admin_that_validates_contributions_is_greather_than_number_admin_max) {
            this.translate.get('NB_ADMIN_VALIDATORS_ERROR_MAX').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.number_admin_that_validates_contributions_is_greather_that_current_number_admin_tontine) {
            this.translate.get('NB_ADMIN_VALIDATORS_ERROR_NB_TONTINE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.bouffe_id_not_exist) {
            this.translate.get('BENEFICIARY_NOT_EXIST_TEXT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.user_not_authorized) {
            this.translate.get('ADD_SHARE_MSG6').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.total_amount_is_greather_than_bouffe_amount) {
            this.translate.get('AMOUNT_GREATHER_THAN_JACKPOT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.this_admin_has_already_validate) {
            this.translate.get('ADMIN_ALREADY_VALIDATE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.montant_online_is_greather_than_online_balance) {
            this.translate.get('ONLINE_AMOUNT_GREATHER_THAN_ONLINE_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.montant_offline_is_greather_than_bank_balance) {
            this.translate.get('OFFLINE_AMOUNT_GREATHER_THAN_OFFLINE_BALANCE').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error && error.error && error.error.this_bouffe_is_already_initiated) {
            this.translate.get('JACKPOT_INITIATE_TEXT').subscribe(trans => {
                this.ui.presentToast(trans);
            });
        }
        if (error.error.tontine_not_found) {
            this.translate.get('TONTINE_INVITE_TEXT10').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.periodicite_less_than_duree_seance) {
            this.translate.get('PERIODICITY_MESSAGE_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.caution_id_not_exist) {
            this.translate.get('CAUTION_NOT_EXIST_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.cycle_id_not_exist) {
            this.translate.get('CYCLE_NOT_EXIST_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.tontine_with_caution_option) {
            this.translate.get('TONTINE_WITH_CAUTION_OPTION').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.user_has_already_full_paid_caution) {
            this.translate.get('USER_PAID_FULL_CAUTION').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.device_not_exist) {
            this.translate.get('CURRENCY_NOT_EXIST_TEXT', { currency: error.error.monnaie_tontine }).subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.seance_not_found) {
            this.translate.get('SEANCE_NOT_FOUND_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.device_not_exist_in_portemonnaie_user) {
            this.translate.get('DEVICE_NOT_EXIT_WALLET_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.solde_insuffisant) {
            this.translate.get('BALANCE_INSUFFICIENT_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        if (error.error.no_match_device_to_device_tontine) {
            this.translate.get('BALANCE_INSUFFICIENT_TEXT').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
};
TontineErrorService.ctorParameters = () => [
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TontineErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TontineErrorService);



/***/ })

}]);
//# sourceMappingURL=default~my-tontines-my-tontines-module~my-tontines-tontine-detail-tontine-detail-module~my-tontines-~ff41dc51.js.map
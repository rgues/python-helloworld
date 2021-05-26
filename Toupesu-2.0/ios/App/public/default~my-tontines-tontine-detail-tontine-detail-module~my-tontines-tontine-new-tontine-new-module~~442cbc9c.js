(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c"],{

/***/ "gelh":
/*!****************************************************!*\
  !*** ./src/app/shared/service/constant.service.ts ***!
  \****************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _dateservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateservice.service */ "oT51");





let ConstantService = class ConstantService {
    constructor(translate, dateService) {
        this.translate = translate;
        this.dateService = dateService;
        this.filterDataType = [];
    }
    getCautionType() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((Observer) => {
            const caution = [];
            this.translate.get([
                'CAUTION_PART',
                'CAUTION_MEMBER'
            ])
                .subscribe(trans => {
                caution.push({ name: trans.CAUTION_PART, value: 'part' });
                caution.push({ name: trans.CAUTION_MEMBER, value: 'member' });
            });
            Observer.next(caution);
        });
    }
    // Get the transaction type
    getTransactionType(type) {
        this.translate.get([
            'TRANSACTION_DEBIT',
            'TRANSACTION_CREDIT',
            'TRANSACTION_WITHDRAWAL',
            'TRANSACTION_IN_PROGRESS',
            'TRANSACTION_APPROVED',
            'TRANSACTION_PENDING',
            'TRANSACTION_REFUSED'
        ])
            .subscribe(value => {
            switch (type) {
                case 'entrant':
                    this.constValue = value.TRANSACTION_CREDIT;
                    break;
                case 'sortant':
                    this.constValue = value.TRANSACTION_DEBIT;
                    break;
                case 'withdrawal':
                    this.constValue = value.TRANSACTION_WITHDRAWAL;
                    break;
                case 'in progress':
                    this.constValue = value.TRANSACTION_IN_PROGRESS;
                    break;
                case 'approved':
                    this.constValue = value.TRANSACTION_APPROVED;
                    break;
                case 'pending':
                    this.constValue = value.TRANSACTION_PENDING;
                    break;
                case 'refused':
                    this.constValue = value.TRANSACTION_REFUSED;
                    break;
                default:
                    this.constValue = type;
                    break;
            }
        });
        return this.constValue;
    }
    // Get the reason of transaction
    getTransactionReason(reason) {
        this.translate.get([
            'TRANSACTION_TYPE_ID1',
            'TRANSACTION_TYPE_ID2',
            'TRANSACTION_TYPE_ID3',
            'TRANSACTION_TYPE_ID4',
            'TRANSACTION_TYPE_ID5',
            'TRANSACTION_TYPE_ID6',
            'TRANSACTION_TYPE_ID7',
            'TRANSACTION_TYPE_ID8',
            'TRANSACTION_TYPE_ID9',
            'TRANSACTION_TYPE_ID10',
            'TRANSACTION_TYPE_ID11',
            'TRANSACTION_TYPE_ID12',
            'TRANSACTION_TYPE_ID13',
            'TRANSACTION_TYPE_ID14',
            'TRANSACTION_TYPE_ID15',
            'TRANSACTION_TYPE_ID16',
            'LOAN_PAYMENT_TEXT',
            'SHARE_LOAN_CASH_TEXT',
            'SHARE_LOAN_CASH_INTEREST_TEXT'
        ])
            .subscribe(value => {
            switch (reason) {
                case 'argent chargé':
                    this.constValue = value.TRANSACTION_TYPE_ID1;
                    break;
                case 'argent bouffé':
                    this.constValue = value.TRANSACTION_TYPE_ID2;
                    break;
                case 'contribution':
                    this.constValue = value.TRANSACTION_TYPE_ID3;
                    break;
                case 'pénalité':
                    this.constValue = value.TRANSACTION_TYPE_ID4;
                    break;
                case 'penalite':
                    this.constValue = value.TRANSACTION_TYPE_ID4;
                    break;
                case 'in progress':
                    this.constValue = value.TRANSACTION_TYPE_ID5;
                    break;
                case 'enchère':
                    this.constValue = value.TRANSACTION_TYPE_ID6;
                    break;
                case 'refused':
                    this.constValue = value.TRANSACTION_TYPE_ID7;
                    break;
                case 'argent remboursé':
                    this.constValue = value.TRANSACTION_TYPE_ID8;
                    break;
                case 'approved':
                    this.constValue = value.TRANSACTION_TYPE_ID9;
                    break;
                case 'contribution payée':
                    this.constValue = value.TRANSACTION_TYPE_ID10;
                    break;
                case 'argent contribué pour Tontine Event':
                    this.constValue = value.TRANSACTION_TYPE_ID11;
                    break;
                case 'argent pénalité':
                    this.constValue = value.TRANSACTION_TYPE_ID12;
                    break;
                case 'transfert caisse':
                    this.constValue = value.TRANSACTION_TYPE_ID13;
                    break;
                case 'paiement':
                    this.constValue = value.TRANSACTION_TYPE_ID14;
                    break;
                case 'swap':
                    this.constValue = value.TRANSACTION_TYPE_ID15;
                    break;
                case 'swap fees':
                    this.constValue = value.TRANSACTION_TYPE_ID16;
                    break;
                case 'paiement pret':
                    this.constValue = value.LOAN_PAYMENT_TEXT;
                    break;
                case 'partage caisse emprunt':
                    this.constValue = value.SHARE_LOAN_CASH_TEXT;
                    break;
                case 'partage interet caisse emprunt':
                    this.constValue = value.SHARE_LOAN_CASH_INTEREST_TEXT;
                    break;
                default:
                    this.constValue = reason;
                    break;
            }
        });
        return this.constValue;
    }
    // Get transaction reason translation
    getTransactionReasonTranslation() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((Observer) => {
            this.translate.get([
                'TRANSACTION_TYPE_ID1',
                'TRANSACTION_TYPE_ID2',
                'TRANSACTION_TYPE_ID3',
                'TRANSACTION_TYPE_ID4',
                'TRANSACTION_TYPE_ID5',
                'TRANSACTION_TYPE_ID6',
                'TRANSACTION_TYPE_ID7',
                'TRANSACTION_TYPE_ID8',
                'TRANSACTION_TYPE_ID9',
                'TRANSACTION_TYPE_ID10',
                'TRANSACTION_TYPE_ID11',
                'TRANSACTION_TYPE_ID12',
                'TRANSACTION_TYPE_ID13',
                'TRANSACTION_TYPE_ID14',
                'TRANSACTION_TYPE_ID15',
                'TRANSACTION_TYPE_ID16',
                'LOAN_PAYMENT_TEXT',
                'SHARE_LOAN_CASH_TEXT',
                'SHARE_LOAN_CASH_INTEREST_TEXT'
            ])
                .subscribe(value => {
                this.filterDataType = [];
                this.filterDataType.push({ type: 'argent chargé', trans: value.TRANSACTION_TYPE_ID1 });
                this.filterDataType.push({ type: 'argent bouffé', trans: value.TRANSACTION_TYPE_ID2 });
                this.filterDataType.push({ type: 'contribution', trans: value.TRANSACTION_TYPE_ID3 });
                this.filterDataType.push({ type: 'pénalité', trans: value.TRANSACTION_TYPE_ID4 });
                this.filterDataType.push({ type: 'in progress', trans: value.TRANSACTION_TYPE_ID5 });
                this.filterDataType.push({ type: 'enchère', trans: value.TRANSACTION_TYPE_ID6 });
                this.filterDataType.push({ type: 'refused', trans: value.TRANSACTION_TYPE_ID7 });
                this.filterDataType.push({ type: 'argent remboursé', trans: value.TRANSACTION_TYPE_ID8 });
                this.filterDataType.push({ type: 'approved', trans: value.TRANSACTION_TYPE_ID9 });
                this.filterDataType.push({ type: 'contribution payée', trans: value.TRANSACTION_TYPE_ID10 });
                this.filterDataType.push({ type: 'penalite', trans: value.TRANSACTION_TYPE_ID4 });
                this.filterDataType.push({ type: 'argent contribué pour Tontine Event', trans: value.TRANSACTION_TYPE_ID11 });
                this.filterDataType.push({ type: 'argent pénalité', trans: value.TRANSACTION_TYPE_ID12 });
                this.filterDataType.push({ type: 'transfert caisse', trans: value.TRANSACTION_TYPE_ID13 });
                this.filterDataType.push({ type: 'paiement', trans: value.TRANSACTION_TYPE_ID14 });
                this.filterDataType.push({ type: 'swap', trans: value.TRANSACTION_TYPE_ID15 });
                this.filterDataType.push({ type: 'swap fees', trans: value.TRANSACTION_TYPE_ID16 });
                this.filterDataType.push({ type: 'paiement pret', trans: value.LOAN_PAYMENT_TEXT });
                this.filterDataType.push({ type: 'partage caisse emprunt', trans: value.SHARE_LOAN_CASH_TEXT });
                this.filterDataType.push({ type: 'partage interet caisse emprunt', trans: value.SHARE_LOAN_CASH_INTEREST_TEXT });
                Observer.next(this.filterDataType);
            });
        });
    }
    // Get the request statut
    getRequestStatut(status) {
        this.translate.get([
            'REQUEST_STATUT_1',
            'REQUEST_STATUT_2',
            'REQUEST_STATUT_3',
            'REQUEST_STATUT_4',
            'REQUEST_STATUT_5'
        ])
            .subscribe(value => {
            switch (status) {
                case 'pending':
                    this.constValue = value.REQUEST_STATUT_1;
                    break;
                case 'approved':
                    this.constValue = value.REQUEST_STATUT_2;
                    break;
                case 'refused':
                    this.constValue = value.REQUEST_STATUT_3;
                    break;
                case 'tout_paye':
                    this.constValue = value.REQUEST_STATUT_4;
                    break;
                case 'pas_tout_paye':
                    this.constValue = value.REQUEST_STATUT_5;
                    break;
                default:
                    this.constValue = status;
                    break;
            }
        });
        return this.constValue;
    }
    // Get the swap type
    getTypeSwap(type) {
        this.translate.get([
            'INSTANT_TEXT',
            'DELAYED_TEXT'
        ])
            .subscribe(value => {
            switch (type) {
                case 'instant':
                    this.constValue = value.INSTANT_TEXT;
                    break;
                case 'delay':
                    this.constValue = value.DELAYED_TEXT;
                    break;
                default:
                    this.constValue = type;
                    break;
            }
        });
        return this.constValue;
    }
    expiredTime(request) {
        let time = '';
        const translation = [];
        this.translate.get(['HRS_TEXT', 'MINS_TEXT', 'SECS_TEXT', 'SINCE_TEXT', 'IN_TEXT']).subscribe(trans => {
            translation.push(trans.HRS_TEXT);
            translation.push(trans.MINS_TEXT);
            translation.push(trans.SECS_TEXT);
            translation.push(trans.SINCE_TEXT);
            translation.push(trans.IN_TEXT);
        });
        if (request && request.temps_restant) {
            if (request.temps_restant[0].heures) {
                time = `${translation[4]} ${request.temps_restant[0].heures} ${translation[0]}`;
            }
            else if (request.temps_restant[0].minutes) {
                time = ` ${translation[4]}  ${request.temps_restant[0].minutes} ${translation[1]}`;
            }
            else if (request.temps_restant[0].secondes) {
                time = ` ${translation[4]}  ${request.temps_restant[0].secondes} ${translation[2]}`;
            }
            else if (request && request.updated_at) {
                const newDate = new Date(request.updated_at);
                time = `${translation[3]} ${this.dateService.formatDateTiret(this.dateService.addDays(newDate, 3))}`;
            }
            else {
                time = ' ';
            }
        }
        return time;
    }
};
ConstantService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _dateservice_service__WEBPACK_IMPORTED_MODULE_4__["DateserviceService"] }
];
ConstantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConstantService);



/***/ }),

/***/ "oT51":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/dateservice.service.ts ***!
  \*******************************************************/
/*! exports provided: DateserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateserviceService", function() { return DateserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DateserviceService = class DateserviceService {
    constructor() { }
    getDateTimeUniversal(date, time, from) {
        const myDates = this.decodeDate(date);
        const myTimes = this.decodeTime(time);
        const objectMyDate = new Date(Number(myDates.year), Number(myDates.month - 1), Number(myDates.day), Number(myTimes.heure), Number(myTimes.minutes), 0, 0);
        let objectMyDateUniversal = {};
        if (from === 'l') {
            objectMyDateUniversal = new Date(objectMyDate.valueOf() + objectMyDate.getTimezoneOffset() * 60000);
        }
        else {
            objectMyDateUniversal = new Date(objectMyDate.valueOf() - objectMyDate.getTimezoneOffset() * 60000);
        }
        const dateFormater = this.formatterDate(objectMyDateUniversal);
        return dateFormater;
    }
    encodeTime(hour, minute) {
        const mTime = hour + ':' + minute;
        return mTime;
    }
    addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }
    // get the remain time
    getRemainTime(data) {
        let timeRemainHour = 0;
        const currentDate = new Date();
        const created = new Date(data.updated_at ? data.updated_at : data.created_at);
        const expiredDate = this.addDays(created, 3);
        const remainTime = expiredDate.getTime() - currentDate.getTime();
        if (remainTime > 0) {
            timeRemainHour = Math.floor(remainTime / 3600000);
        }
        return timeRemainHour;
    }
    decodeTime(time) {
        const times = time.split(':');
        const myTime = {
            heure: times[0],
            minutes: times[1],
            secondes: times[2],
        };
        return myTime;
    }
    decodeDate(myDate) {
        const mDates = myDate.split('-');
        const mDate = {
            year: mDates[0],
            month: mDates[1],
            day: mDates[2]
        };
        return mDate;
    }
    encodeDate(day, month, year) {
        const mDate = year + '-' + month + '-' + day;
        return mDate;
    }
    formatterDate(date) {
        const year = String(date.getFullYear());
        const month = String(('0' + (date.getMonth() + 1)).slice(-2));
        const day = String(('0' + date.getDate()).slice(-2));
        const hour = String(('0' + date.getHours()).slice(-2));
        const minute = String(('0' + date.getMinutes()).slice(-2));
        const myFormatDate = {
            date: year + '-' + month + '-' + day,
            time: hour + ':' + minute,
        };
        return myFormatDate;
    }
    formatDateSplash(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = day + '/' + month + '/' + dateFormat.getFullYear();
        return formatDate;
    }
    formatDateSplashReverse(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '/' + month + '/' + day;
        return formatDate;
    }
    formatDateTiret(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() + 1 < 10) ? '0' + (dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '-' + month + '-' + day;
        return formatDate;
    }
    formatDate(date) {
        const dateFormat = new Date(date);
        const month = (dateFormat.getMonth() < 10) ? '0' + (dateFormat.getMonth()) : (dateFormat.getMonth());
        const day = dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate();
        const formatDate = dateFormat.getFullYear() + '-' + month + '-' + day;
        return formatDate;
    }
    // Filter the date
    filterDate(date) {
        return new Date(date);
    }
};
DateserviceService.ctorParameters = () => [];
DateserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateserviceService);



/***/ })

}]);
//# sourceMappingURL=default~my-tontines-tontine-detail-tontine-detail-module~my-tontines-tontine-new-tontine-new-module~~442cbc9c.js.map
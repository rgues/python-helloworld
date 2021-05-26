(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-bid-module"],{

/***/ "8Y1N":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-time-edit/bid-time-edit.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWQtdGltZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AIl2":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid.page.ts ***!
  \**********************************************************************/
/*! exports provided: BidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPage", function() { return BidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bid.page.html */ "NSqv");
/* harmony import */ var _bid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bid.page.scss */ "B/Gq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bid_time_edit_bid_time_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid-time-edit/bid-time-edit.component */ "Yefa");
/* harmony import */ var _bid_confirmation_bid_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid-confirmation/bid-confirmation.component */ "Cj7e");
/* harmony import */ var _bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bid-edit/bid-edit.component */ "GcHf");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/encheres.service */ "PqeH");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _services_contribution_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/contribution.service */ "US41");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/user/service/user.service */ "6Hie");
var BidPage_1;














let BidPage = BidPage_1 = class BidPage {
    constructor(modatCtrl, tontine, tontinesData, contribution, encheresService, userService, error) {
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.tontinesData = tontinesData;
        this.contribution = contribution;
        this.encheresService = encheresService;
        this.userService = userService;
        this.error = error;
        this.compteur = '';
        this.sessionInfo = '';
        this.userName = '';
        this.bidNumeroLot = [];
        this.MembresBouffeList = [];
        this.MembresPasBouffeList = [];
        this.currentAmount = [];
        this.user = this.userService.getUserData();
        this.typesTontines = [];
        this.members = [];
        this.NberLotTab = [];
        this.currentAmountBidder = [];
        this.currentAmountBidderSearch = [];
        this.seance = null;
        this.bid = null;
        this.canContribute = true;
        this.tontineCountryName = '';
        this.tontineFrequencyName = '';
        this.tontineTypeName = '';
        const tontineData = this.tontine.getCurrentTontineData();
        this.tontineId = tontineData.tontine.tontine_id;
        this.currentSeance = tontineData.seance_courante;
        this.canBid = true;
        BidPage_1.canConnect = null;
        this.currentBidPart = 1;
        this.loading = false;
    }
    ngOnInit() {
        // mettre a false pour le mobile 
        this.loading = true;
        this.getListOfMembresBouffeOuPasForACycle(null);
    }
    ionViewWillEnter() {
        this.loading = true;
        this.getListOfMembresBouffeOuPasForACycle(null);
    }
    openShareEdit(tontineData) {
        this.tontine.setCurrentTontineData(tontineData);
        this.modatCtrl
            .create({
            component: _bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_7__["BidEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.updateCurrentUserTontine(null);
            });
        });
    }
    openbidtimeEdit(tontineData) {
        this.tontine.setCurrentTontineData(tontineData);
        this.modatCtrl
            .create({
            component: _bid_time_edit_bid_time_edit_component__WEBPACK_IMPORTED_MODULE_5__["BidTimeEditComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                this.updateCurrentUserTontine(null);
            });
        });
    }
    openbidConfirm(tontine, userId, numPart, seanceId, numeroLot, current_amount, increment) {
        this.modatCtrl
            .create({
            component: _bid_confirmation_bid_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["BidConfirmationComponent"],
            componentProps: {
                userId: userId,
                TontineName: tontine.name,
                batcheNum: numeroLot,
                amount: this.tontinesData.SumFloat(current_amount, increment),
                Current_Bid: parseFloat(current_amount),
                Increment_Bid: parseFloat(increment),
                Seance_Id_Bid: seanceId,
                currency: tontine.currency,
                numeroPart: numPart
            }
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(() => {
                BidPage_1.canConnect = null;
                this.loading = true;
                this.getListOfMembresBouffeOuPasForACycle(null);
            });
        });
    }
    // Get the list of members n ayant pas bouffe et ayant bouffe pour un cycle_id
    getListOfMembresBouffeOuPasForACycle(event) {
        const current = this.tontine.getCurrentTontineData();
        const nbPart = this.tontinesData.getNumberPart(current.membres.liste_membre, this.user.id);
        /*   console.log('nb parts');
          console.log(nbPart); */
        this.MembresBouffeList = [];
        this.MembresPasBouffeList = [];
        this.canBid = true;
        this.currentBidPart = 1;
        if (current.seance_courante) {
            this.contribution.getDataMembresAyantBouffe(current.seance_courante.cycle_id, current.tontine.tontine_id).then((reponse) => {
                /*   console.log(' cycle beneficiaries');
                  console.log(reponse); */
                if (reponse && reponse.ans && reponse.ans.membres && reponse.ans.membres.length > 0) {
                    this.MembresBouffeList = reponse.ans.membres;
                    let currentPartBenef = 0;
                    for (let i = 0; i < this.MembresBouffeList.length; i++) {
                        if (this.MembresBouffeList[i].id === this.user.id) {
                            currentPartBenef++;
                            this.currentBidPart++;
                            if (currentPartBenef === nbPart) {
                                this.canBid = false;
                                break;
                            }
                        }
                    }
                }
                // set default configuration
                const tontineData = this.tontine.getCurrentTontineData();
                this.initTontineData(tontineData, event);
            });
        }
        else {
            this.canBid = false;
            this.initTontineData(current, event);
        }
    }
    // init the tontine data
    initTontineDataOnly(data) {
        this.currentTontine = data;
        this.getTontineDataFunc(this.currentTontine);
    }
    // init the tontine data
    initTontineData(data, event) {
        this.initTontineDataOnly(data);
        if (this.seance) {
            this.bidStatusFunc(event);
        }
        else {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
        }
        this.currentTontine.tontine.type_time_debut_bid = this.tontinesData.getFormatTimeBid(this.currentTontine.tontine.type_time_debut_bid);
        this.currentTontine.tontine.type_time_fin_bid = this.tontinesData.getFormatTimeBid(this.currentTontine.tontine.type_time_fin_bid);
    }
    getTontineDataFunc(data) {
        this.currentTontine = data;
        this.myTontine = {
            name: data.tontine.name,
            description: data.tontine.description,
            type: data.tontine.drawingtype_id,
            type_tontine_key: data.tontine.type_tontine_key,
            country: data.tontine.country,
            country_key: data.tontine.country_key,
            currency: data.tontine.monnaie,
            contribution: data.tontine.coutshare,
            frequency: data.tontine.periodicite,
            frequency_key: data.tontine.periodicite_key,
            dateStart: data.tontine.date_debut,
            totalShare: data.tontine.nombre_part_max_tontine || '',
            maxShareMber: data.tontine.nombre_part_max_membre,
            nbrOfBaches: data.tontine.numberlot,
            penalityAbsence: data.tontine.penaliteabsencesurlacontributionayantbouffe,
            penalityAbsenceUnit: data.tontine.typepenaliteabsencesurlacontributionayantbouffe === 'pourcentage' ? '%'
                : data.tontine.typepenaliteabsencesurlacontributionayantbouffe,
            penalityContrib: data.tontine.penaliteabsencesurlacontributionayantbouffe,
            penalityContribUnit: data.tontine.typepenaliteretardsurlacontributionayantbouffe === 'pourcentage' ? '%'
                : data.tontine.typepenaliteretardsurlacontributionayantbouffe,
            penalityLoan: data.tontine.penalitesurleremboursement,
            penalityLoanUnit: data.tontine.typepenalitesurleremboursement === 'pourcentage' ? '%'
                : data.tontine.typepenalitesurleremboursement,
            timeDelay: data.tontine.dureesurleretard,
            timeDelayUnit: data.tontine.typedureesurleretard,
            balance: data.tontine.solde_en_caisse,
            contributionCashier: data.tontine.caisse_cotisation,
            penalitiesCashier: data.tontine.caisse_penalite
        };
        this.bid = data.tontine;
        this.seance = data.seance_courante;
        this.cycle = data.cycle_courant;
        this.members = data.membres;
    }
    // bid service 
    bidStatusFunc(event) {
        // BidPage.canConnect = this.encheresService.connexion(this.currentTontine.seance_courante.id);
        this.bidService(event);
    }
    bidService(event) {
        if (this.currentTontine.tontine.numberlot !== null) {
            let j = 1;
            let bid_starter = 0;
            let cagnote = 0;
            cagnote = parseFloat(((parseFloat(this.currentTontine.tontine.coutshare) * parseFloat(this.currentTontine.membres.nombre_membre)) /
                (parseFloat(this.currentTontine.tontine.numberlot))).toFixed(2));
            if (this.currentTontine.tontine.type_starter_bid_increment === "pourcentage") {
                bid_starter = parseFloat(this.currentTontine.tontine.coutshare) *
                    (parseFloat(this.currentTontine.tontine.starter_bid_increment ? this.currentTontine.tontine.starter_bid_increment : 0) / 100);
            }
            else {
                bid_starter = parseFloat(this.currentTontine.tontine.starter_bid_increment);
            }
            this.currentAmount = [];
            this.currentAmountBidder = [];
            this.currentAmountBidderSearch = [];
            // if (!BidPage.canConnect) {
            BidPage_1.canConnect = this.encheresService.connexion(this.currentTontine.seance_courante.id);
            //  }
            this.encheresService.memberConnection(this.user.id, this.currentBidPart, this.currentTontine.seance_courante.id, this.currentTontine.tontine.numberlot);
            while (j <= parseFloat(this.currentTontine.tontine.numberlot)) {
                this.currentAmount.push({
                    MiseAPrix: cagnote,
                    tontine_id: this.currentTontine.seance_courante.tontine_id,
                    monnaie: this.currentTontine.tontine.monnaie,
                    somme: 0,
                    seanceID: this.currentTontine.seance_courante.id,
                    StarterAmount: bid_starter,
                    userID: 0,
                    numero_lot: j
                });
                this.encheresService.getWinnerCurrent(this.currentTontine.seance_courante.id + '' + j).subscribe(data => {
                    //  console.log('Last Biddeur socket');
                    // console.log(JSON.stringify(data));
                    if (data !== null) {
                        // add on head of array
                        this.currentAmount.unshift({
                            MiseAPrix: cagnote,
                            tontine_id: this.currentTontine.seance_courante.tontine_id,
                            monnaie: this.currentTontine.tontine.monnaie,
                            somme: JSON.parse(data).somme,
                            seanceID: JSON.parse(data).seance_id,
                            StarterAmount: bid_starter,
                            userID: JSON.parse(data).user_id,
                            numero_lot: JSON.parse(data).numero_lot
                        });
                        // remove same element occurrence
                        this.currentAmount = this.currentAmount.filter((elem, index, self) => self.findIndex((t) => { return (t.numero_lot === elem.numero_lot && t.seanceID === elem.seanceID); }) === index);
                        // order by numpart   
                        this.currentAmount = this.currentAmount.sort((a, b) => { return parseFloat(a.numero_lot) - parseFloat(b.numero_lot); });
                    }
                });
                this.encheresService.getBidderHistory(this.currentTontine.seance_courante.id, j).subscribe((data) => {
                    // console.log('Biddeur history socket');
                    //  console.log(JSON.stringify(data));
                    if (data && data.bider.length > 0) {
                        data.bider.forEach(item => {
                            // console bidder history
                            this.currentAmountBidder.push({ somme: item.somme, seanceID: item.seance_id, userID: item.user_id, numero_lot: item.numero_lot });
                            // set the bider of seance batches
                            this.currentAmountBidderSearch.push({ searchIndex: item.seance_id + '' + item.user_id, numero_lot: item.numero_lot });
                            // remove same occurrence
                            this.currentAmountBidderSearch = this.currentAmountBidderSearch.filter((elem, index, self) => self.findIndex((t) => { return (t.numero_lot === elem.numero_lot && t.searchIndex === elem.searchIndex); }) === index);
                        });
                    }
                }, error => {
                    this.error.manageError(error);
                });
                j = j + 1;
            }
            // console.log('Biddeur history');
            //  console.log(JSON.stringify(this.currentAmountBidder));
            //  console.log('Biddeur filter');
            //  console.log(JSON.stringify(this.currentAmountBidderSearch));
            //  console.log('last bid');
            //  console.log(JSON.stringify(this.currentAmount));
            this.encheresService.getCounter().subscribe(data => {
                // console.log('compteur');
                // console.log(data);
                if (data <= 0) {
                    this.compteur = 0;
                }
                else {
                    this.compteur = data;
                }
            });
            this.encheresService.getSessionInfo().subscribe(data => {
                // console.log('session');
                // console.log(data);
                this.sessionInfo = data;
            });
            this.loading = false;
            if (event) {
                setTimeout(() => {
                    event.target.complete();
                }, 2000);
            }
        }
        else {
            this.loading = false;
            event.target.complete();
        }
    }
    // Refresh the list
    refreSher(event) {
        BidPage_1.canConnect = null;
        this.getListOfMembresBouffeOuPasForACycle(event);
    }
    checkMemberContributionSeance(membersList) {
        return this.tontinesData.checkMemberContributionSeance(membersList);
    }
    ConvertToFloat(miseAprix) {
        return this.tontinesData.ConvertToFloat(miseAprix);
    }
    getPourcentageCurrentBid(miseAprix, somme) {
        return this.tontinesData.getPourcentageCurrentBid(miseAprix, somme);
    }
    getCreatorName(liste_membre, userId) {
        return this.tontinesData.getPourcentageCurrentBid(liste_membre, userId);
    }
    SumFloat(somme, increment) {
        return this.tontinesData.SumFloat(somme, increment);
    }
    // check if a user can bid 
    // pb here can be the condition on somme value
    canBidLot(data) {
        /*  console.log(data);
         console.log(this.checkMemberContributionSeance(this.members.liste_membre) );
         console.log(this.compteur);
         console.log(this.canBid);
         console.log(this.getCreatorName(this.members.liste_membre, data.userID));
         console.log(data.somme);
         console.log(this.lookup(data.seanceID+''+this.user.id,data.numero_lot,this.currentAmountBidderSearch));
         console.log(this.getPourcentageCurrentBid(data.MiseAPrix, data.somme !== 0 ? data.somme : 1)); */
        let icanBid = false;
        // this condition (data.somme !== '0') is for bid with negative increment 
        const membersList = this.members && this.members.liste_membre && this.members.liste_membre.length > 0 ? this.members.liste_membre : [];
        if (this.tontinesData.checkMemberContributionSeance(membersList) &&
            (this.compteur && this.compteur > 0) && this.canBid &&
            ((this.tontinesData.getCreatorName(membersList, data.userID) === '' || (this.tontinesData.getCreatorName(membersList, data.userID) !== this.tontinesData.getCreatorName(membersList, this.user.id))) && (data.somme !== '0')) &&
            this.tontinesData.hasBidForBatecheSession(data.seanceID + '' + this.user.id, data.numero_lot, this.currentAmountBidderSearch) &&
            this.tontinesData.getPourcentageCurrentBid(data.MiseAPrix, data.somme !== 0 ? data.somme : 1) < 90) {
            icanBid = true;
        }
        //  console.log(icanBid);
        return icanBid;
    }
    // Update the current user tontine
    updateCurrentUserTontine(event) {
        const tontineData = this.tontine.getCurrentTontineData();
        if (tontineData && tontineData.tontine) {
            this.tontine.getTontineDetail(tontineData.tontine.tontine_id).subscribe((reponse) => {
                if (reponse.infos_tontine && reponse.infos_tontine.length > 0) {
                    this.tontine.setCurrentTontineData(reponse.infos_tontine[0]);
                    const tontineData = this.tontine.getCurrentTontineData();
                    if (tontineData && tontineData.tontine) {
                        this.initTontineDataOnly(tontineData);
                    }
                }
                this.loading = false;
                if (event) {
                    event.target.complete();
                }
            }, error => {
                this.loading = false;
                if (event) {
                    event.target.complete();
                }
                if (error && error.error && error.error.bad_token) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === 'OK') {
                            this.updateCurrentUserTontine(event);
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.error.manageError(error);
                }
            });
        }
        else {
            this.loading = false;
            if (event) {
                event.target.complete();
            }
        }
    }
};
BidPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_8__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_12__["TontineGlobalDataService"] },
    { type: _services_contribution_service__WEBPACK_IMPORTED_MODULE_11__["ContributionService"] },
    { type: src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_9__["EncheresService"] },
    { type: src_app_dashboard_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"] }
];
BidPage = BidPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bid',
        template: _raw_loader_bid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BidPage);



/***/ }),

/***/ "B/Gq":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Cj7e":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-confirmation/bid-confirmation.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BidConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidConfirmationComponent", function() { return BidConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bid_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bid-confirmation.component.html */ "G98w");
/* harmony import */ var _bid_confirmation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bid-confirmation.component.scss */ "cK1g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/encheres.service */ "PqeH");






let BidConfirmationComponent = class BidConfirmationComponent {
    constructor(modatCtrl, encheresService) {
        this.modatCtrl = modatCtrl;
        this.encheresService = encheresService;
    }
    ngOnInit() { }
    closeBidConfirmation() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    confirmBid(userId, numeroPart, seanceId, numeroLot, current_amount, increment) {
        this.encheresService.bider(userId, numeroPart, seanceId, numeroLot, current_amount, increment);
        this.closeBidConfirmation();
    }
};
BidConfirmationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_service_encheres_service__WEBPACK_IMPORTED_MODULE_5__["EncheresService"] }
];
BidConfirmationComponent.propDecorators = {
    batcheNum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    TontineName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    Seance_Id_Bid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    Increment_Bid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    Current_Bid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    numeroPart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BidConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bid-confirmation',
        template: _raw_loader_bid_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bid_confirmation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BidConfirmationComponent);



/***/ }),

/***/ "G98w":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/bid/bid-confirmation/bid-confirmation.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_BID_TEXT6' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{ 'TONTINE_BID_TEXT8' | translate }} #{{batcheNum}} {{ 'TONTINE_BID_TEXT7' | translate }} <em>{{TontineName}}</em>\r\n           {{ 'FOR_TEXT' | translate }} <strong>{{amount}} {{currency}}</strong></p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>          \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"confirmBid(userId,numeroPart,Seance_Id_Bid,batcheNum,Current_Bid,Increment_Bid)\">\r\n                {{ 'YES_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>  \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeBidConfirmation()\">\r\n                {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ "GcHf":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-edit/bid-edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BidEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidEditComponent", function() { return BidEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bid_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bid-edit.component.html */ "V890");
/* harmony import */ var _bid_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bid-edit.component.scss */ "fLjF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/tontine-global-data.service */ "Ez5k");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");














let BidEditComponent = class BidEditComponent {
    constructor(fb, modatCtrl, tontine, tontineData, events, error, translate, formUtil, ui, tontineError) {
        this.fb = fb;
        this.modatCtrl = modatCtrl;
        this.tontine = tontine;
        this.tontineData = tontineData;
        this.events = events;
        this.error = error;
        this.translate = translate;
        this.formUtil = formUtil;
        this.ui = ui;
        this.tontineError = tontineError;
        this.loading = false;
        this.membersList = [];
        this.minMemberShare = 1;
        this.minStokvelShare = this.tontineData.getNumberShareStokvel();
    }
    ngOnInit() {
        this.InitShareInformation();
        this.getListOfMembers();
    }
    closeShareEdit(response) {
        this.modatCtrl.dismiss(response, 'cancel');
    }
    // can edit bid data
    canEdit() {
        let icannot = false;
        if (this.shareEditForm.invalid
            || (this.shareEditForm.value.nombre_part_max_tontine < this.minStokvelShare)
            || this.loading
            || (this.shareEditForm.value.nombre_part_max_membre > this.shareEditForm.value.nombre_part_max_tontine) || (this.shareEditForm.value.numberlot < 1)) {
            icannot = false;
        }
        return icannot;
    }
    // Init the tontine form
    InitShareInformation() {
        let formData = this.tontine.getCurrentTontineData();
        const defaultData = {
            tontine: {
                tontine_id: '',
                drawingtype_id: '',
                nombre_part_max_membre: '',
                nombre_part_max_tontine: '',
                contribution_amount: '',
                numberlot: '',
                miseaprixcaisse1: '',
                typeMiseaprix1: 'pourcentage',
                liste_miseaprixcaisse1: [],
                miseaprixcaisse2: '',
                typeMiseaprix2: 'pourcentage',
                liste_miseaprixcaisse2: [],
                ajout_part_membre_en_contribuant_seances_passees_et_restantes: 'non',
                ajout_part_membre_en_contribuant_seulement_seances_restantes: 'oui',
            }
        };
        if (!formData) {
            formData = defaultData;
        }
        this.startDateSelect = new Date(formData.tontine.date_debut);
        this.shareEditForm = this.fb.group({
            tontine_id: [formData.tontine.tontine_id],
            tontine_type_id: [formData.tontine.drawingtype_id],
            nombre_part_max_membre: [formData.tontine.nombre_part_max_membre,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$')])],
            nombre_part_max_tontine: [formData.tontine.nombre_part_max_tontine,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$')])],
            numberlot: [formData.tontine.numberlot, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[\\d]+$')])],
            contribution_amount: [formData.tontine.coutshare],
            miseaprixcaisse1: [formData.tontine.miseaprixcaisse1],
            typeMiseaprix1: [formData.tontine.typeMiseaprix1],
            liste_miseaprixcaisse1: [],
            miseaprixcaisse2: [formData.tontine.miseaprixcaisse2],
            typeMiseaprix2: [formData.tontine.typeMiseaprix2],
            liste_miseaprixcaisse2: [],
            contributeCas1: [formData.tontine.ajout_part_membre_en_contribuant_seances_passees_et_restantes === 'oui' ? true : false],
            contributeCas2: [formData.tontine.ajout_part_membre_en_contribuant_seulement_seances_restantes === 'oui' ? true : false],
            ajout_part_membre_en_contribuant_seances_passees_et_restantes: [''],
            ajout_part_membre_en_contribuant_seulement_seances_restantes: ['']
        });
    }
    // Get the list of tontine users
    getListOfMembers() {
        const current = this.tontine.getCurrentTontineData();
        this.tontine.getTontinesMembers(current.tontine.tontine_id).subscribe((reponse) => {
            if (reponse && reponse.members && reponse.members.length > 0) {
                this.membersList = reponse.members;
                this.minMemberShare = this.tontineData.getMinNumberShareMember(this.membersList);
            }
        }, error => {
            if (error && error.error && error.error.user_not_found || error.error.user_unauthorized) {
                this.error.renewSession().then((data) => {
                    if (data && data.result === 'OK') {
                        this.getListOfMembers();
                    }
                });
            }
            else {
                this.error.manageError(error);
            }
        });
    }
    // Check the first mise à prix
    checkMiseaPrix1(value) {
        this.errorMiseaprix1 = this.formUtil.validateMisaPrix(value);
    }
    // Check the second mise à prix
    checkMiseaPrix2(value) {
        this.errorMiseaprix2 = this.formUtil.validateMisaPrix(value);
    }
    // Update tontine share
    updateShare() {
        this.loading = true;
        if (this.shareEditForm.value.tontine_type_id === 3) {
            this.shareEditForm.get('liste_miseaprixcaisse1')
                .setValue([{ miseaprixcaisse1: this.shareEditForm.value.miseaprixcaisse1, type: this.shareEditForm.value.typeMiseaprix1 }]);
            this.shareEditForm.get('liste_miseaprixcaisse2')
                .setValue([{ miseaprixcaisse2: this.shareEditForm.value.miseaprixcaisse2, type: this.shareEditForm.value.typeMiseaprix2 }]);
        }
        else {
            this.shareEditForm.get('liste_miseaprixcaisse1')
                .setValue([{ miseaprixcaisse1: 'NULL', type: 'NULL' }]);
            this.shareEditForm.get('liste_miseaprixcaisse2')
                .setValue([{ miseaprixcaisse2: 'NULL', type: 'NULL' }]);
        }
        this.shareEditForm.value.contributeCas1 ?
            this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
                .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seances_passees_et_restantes')
            .setValue('non');
        this.shareEditForm.value.contributeCas2 ?
            this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
                .setValue('oui') : this.shareEditForm.get('ajout_part_membre_en_contribuant_seulement_seances_restantes')
            .setValue('non');
        this.tontine.createAndUpdateParametreTontine(this.shareEditForm.value).subscribe((reponse) => {
            this.loading = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('M_TONTINE_SUCCESSFUL_UPDATED').subscribe(trans => {
                    this.ui.presentToast(trans);
                });
                this.events.publish('new-tontine');
                this.closeShareEdit('success');
            }
        }, error => {
            this.loading = false;
            if (error && error.error && error.error.message === 'error') {
                if (error && error.error && error.error.user_unauthorized) {
                    this.loading = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateShare();
                        }
                        else {
                            this.loading = false;
                            this.closeShareEdit('cancel');
                        }
                    });
                }
                else {
                    this.closeShareEdit('cancel');
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.closeShareEdit('cancel');
                this.error.manageError(error);
            }
        });
    }
};
BidEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_6__["TontineService"] },
    { type: _services_tontine_global_data_service__WEBPACK_IMPORTED_MODULE_11__["TontineGlobalDataService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_9__["FormUtilsService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_13__["UiService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_10__["TontineErrorService"] }
];
BidEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bid-edit',
        template: _raw_loader_bid_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bid_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BidEditComponent);



/***/ }),

/***/ "LJQI":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/bid/bid-time-edit/bid-time-edit.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_TIME_PARAM_TEXT' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"tontineBidTime\">\r\n    <ion-grid>\r\n      <ion-row >\r\n        <ion-col>\r\n          <ion-text>\r\n            <b>{{ 'SESSION_TIME_TEXT' | translate }}</b>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div formGroupName=\"sessionTime\">\r\n        <div formGroupName=\"startTime\">\r\n          <ion-row>\r\n            <ion-col>              \r\n              <ion-item>\r\n                <ion-label>{{ 'CYCLE_START_ON' | translate }}</ion-label>\r\n                <ion-datetime (ionChange)=\"OnDateChange($event.value)\"  formControlName=\"startDay\" displayFormat=\"DDDD D MMM, YYYY\" [min]=\"startDateSelect.getFullYear()\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\r\n              </ion-item>               \r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col class=\"ion-padding-top\">\r\n          <ion-text>\r\n            <b>{{ 'BID_TIME_TEXT' | translate }}</b>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div formGroupName=\"bidTime\">\r\n        <div formGroupName=\"startTime\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item-divider color=\"light\">\r\n                <ion-label>\r\n                  {{ 'CYCLE_START_ON' | translate }}\r\n                </ion-label>\r\n              </ion-item-divider>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"2\" *ngIf=\"tontine.tontine.periodicite !=='day'\">\r\n              <ion-label>{{ 'DAY_TEXT' | translate }}</ion-label>\r\n              <ion-select  (ionChange)=\"SelectStartPeriod(StartPeriod[0].label)\" formControlName=\"startDay\">\r\n                <ion-select-option *ngFor=\"let d of dayList\" [value]=\"d\">{{d}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>{{ 'HOUR_TEXT' | translate }}</ion-label>\r\n              <ion-select formControlName=\"startHour\" (ionChange)=\"SelectStartPeriod(StartPeriod[1].label)\">\r\n                <ion-select-option *ngFor=\"let h of hourList\" [value]=\"h.value\">{{h.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>Minute(s)</ion-label>\r\n              <ion-select formControlName=\"startMin\" (ionChange)=\"SelectStartPeriod(StartPeriod[2].label)\">\r\n                <ion-select-option *ngFor=\"let m of minList\" [value]=\"m.value\">{{m.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{ 'SECOND_TEXT' | translate }}</ion-label>\r\n              <ion-select formControlName=\"startSnd\" (ionChange)=\"SelectStartPeriod(StartPeriod[3].label)\">\r\n                <ion-select-option *ngFor=\"let s of secList\" [value]=\"s.value\">{{s.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div formGroupName=\"endTime\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item-divider color=\"light\">\r\n                <ion-label>\r\n                  {{ 'CYCLE_END_ON' | translate }}\r\n                </ion-label>\r\n              </ion-item-divider>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"2\" *ngIf=\"tontine.tontine.periodicite !=='day'\"> \r\n              <ion-label>{{ 'DAY_TEXT' | translate }}</ion-label>\r\n              <ion-select formControlName=\"endDay\" (ionChange)=\"SelectEndPeriod(EndPeriod[0].label)\">\r\n                <ion-select-option *ngFor=\"let d of dayList\" [value]=\"d\">{{d}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>{{ 'HOUR_TEXT' | translate }}</ion-label>\r\n              <ion-select formControlName=\"endHour\" (ionChange)=\"SelectEndPeriod(EndPeriod[1].label)\">\r\n                <ion-select-option *ngFor=\"let h of hourList\" [value]=\"h.value\">{{h.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-label>Minute(s)</ion-label>\r\n              <ion-select formControlName=\"endMin\" (ionChange)=\"SelectEndPeriod(EndPeriod[2].label)\">\r\n                <ion-select-option *ngFor=\"let m of minList\" [value]=\"m.value\">{{m.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-label>{{ 'SECOND_TEXT' | translate }}</ion-label>\r\n              <ion-select formControlName=\"endSnd\" (ionChange)=\"SelectEndPeriod(EndPeriod[3].label)\">\r\n                <ion-select-option *ngFor=\"let s of secList\" [value]=\"s.value\">{{s.label}}</ion-select-option>       \r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n      \r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row>          \r\n      <ion-col>\r\n          <ion-button expand=\"full\"  (click)=\"resetForm()\"\r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\">\r\n                {{ 'RESET_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>  \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeBidTimeEdit()\">\r\n                {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"full\"   [disabled]=\"loadingReg || EditTimeBid.time_debut_bid === ''|| EditTimeBid.time_fin_bid === ''\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\"  (click)=\"editTimeFunc()\">\r\n                {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col> \r\n      <p class=\"ion-text-center\">\r\n        <ion-spinner *ngIf=\"loadingReg\"  name=\"circles\"></ion-spinner>\r\n      </p>     \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "NSqv":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/bid/bid.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" [defaultHref]=\"'/dashboard/my-tontines/' + tontineId\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"no-padding ion-text-center\">\r\n      {{ 'M_BID_INFORMATIONS' | translate }}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bid\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreSher($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"reload-outline\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"{{ 'M_REFRESHING_TEXT' | translate }}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n          <ion-img class=\"inner-image\" [src]=\"'assets/bid.svg'\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"bid-info ion-padding\">\r\n      <p class=\"ion-no-margin\"><b>{{ 'SESSION_TIME_TEXT' | translate }}</b></p>\r\n      <ion-row class=\"row-1\">      \r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'CYCLE_START_ON' | translate }}</b><br/>{{seance && seance.date_debut ? seance.date_debut.split(' ')[0]  : ('TONTINE_LIST_CONFIG' | translate) }}\r\n          <span *ngIf=\"seance\">-</span>  {{seance ? seance.heure_debut : ''}}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'CYCLE_END_ON' | translate }}</b><br/>{{seance && seance.date_fin ? seance.date_fin.split(' ')[0]  : ('TONTINE_LIST_CONFIG' | translate) }} \r\n          <span *ngIf=\"seance\">-</span> {{seance ? seance.heure_fin : ''}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <p class=\"ion-no-margin\"><b>{{ 'BID_TIME_TEXT' | translate }}</b></p>\r\n      <ion-row class=\"row-2\">      \r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'BID_START_ON' | translate }}:</b><br/>{{ currentTontine && currentTontine.tontine && currentTontine.tontine.time_debut_bid ? currentTontine.tontine.time_debut_bid : ''}} {{currentTontine && currentTontine.tontine && currentTontine.tontine.type_time_debut_bid ? (currentTontine.tontine.type_time_debut_bid | translate) : ''}} {{ 'BID_AFTER_TIME' | translate }}\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <b>{{ 'BID_END_ON' | translate }}: </b><br/>{{currentTontine && currentTontine.tontine && currentTontine.tontine.time_fin_bid ? currentTontine.tontine.time_fin_bid : ''}} {{ currentTontine && currentTontine.tontine && currentTontine.tontine.type_time_fin_bid ? (currentTontine.tontine.type_time_fin_bid | translate) : ''}} {{ 'BID_BEFORE_TIME' | translate }}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-buttons class=\"edit-btn\" *ngIf=\"currentTontine && currentTontine.tontine && currentTontine.tontine.administrator === 1 && seance === null\">\r\n        <ion-button (click)=\"openbidtimeEdit(currentTontine)\">\r\n         <ion-icon color=\"warning\" name=\"create\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </div>  \r\n    <p class=\"ion-text-center\"  *ngIf=\"loading\">\r\n      <ion-spinner  name=\"circles\"></ion-spinner>\r\n    </p>\r\n    <ion-row *ngIf=\"currentAmount && currentAmount.length > 0 && !loading\">\r\n      <ion-col size=\"12\">\r\n        <ion-card  *ngFor=\"let data of currentAmount; let i =index;\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              <ion-chip>\r\n                <ion-label color=\"primary\">{{ 'TONTINE_LIST_TEXT3B' | translate }} # {{data.numero_lot}}</ion-label>\r\n              </ion-chip>\r\n              <ion-text color=\"danger\" class=\"ion-float-right countdown\">{{compteur | compteurFormat}}</ion-text>\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            <p class=\"ion-text-center\">{{ 'TONTINE_BID_TEXT4' | translate }}: <ion-text><b>{{ (ConvertToFloat(data.MiseAPrix) | commadumper) }} {{data.monnaie}}</b></ion-text></p>\r\n            <p class=\"ion-text-center\">{{ 'TONTINE_BID_TEXT3' | translate }}: <ion-text color=\"warning\"><b>{{ (data.somme !== 0) ? (data.somme | commadumper) : (data.StarterAmount | commadumper)}} {{data.monnaie}}</b></ion-text></p>\r\n            <p class=\"ion-text-center\">{{ 'BENEFICIARY_TEXT' | translate }}: <ion-text><b>{{(data.somme !== 0) ? getCreatorName(members.liste_membre, data.userID) : ('TONTINE_LIST_TEXT6' | translate)}}</b></ion-text></p>\r\n            <p class=\"error\" *ngIf=\"!checkMemberContributionSeance(members.liste_membre) && compteur && compteur > 0 && canBid\">{{'TONTINE_BID_TEXT9' | translate}}</p>\r\n            <p class=\"error\" *ngIf=\"compteur && compteur > 0 && !canBid\">{{'TONTINE_BID_TEXT14' | translate}}</p>\r\n            <ion-button   *ngIf=\"canBidLot(data)\"\r\n                color=\"warning\"\r\n                class=\"ion-text-capitalize ion-float-right ion-margin-vertical\"\r\n                fill=\"solid\"\r\n                size=\"small\"\r\n                (click)=\"openbidConfirm(myTontine,user.id,currentBidPart, data.seanceID,data.numero_lot,(data.somme !== 0) ? data.somme : 0, sessionInfo.inc)\">\r\n                {{ 'TONTINE_BID_TEXT5' | translate }}\r\n                {{ (data.somme !== 0) ? (SumFloat(data.somme,sessionInfo.inc) | commadumper) : (SumFloat(data.StarterAmount,sessionInfo.inc) | commadumper) }}\r\n                {{data.monnaie}}\r\n            </ion-button>\r\n\r\n            <p class=\"error\" *ngIf=\"(getPourcentageCurrentBid(data.MiseAPrix, (data.somme !== 0) ? data.somme : 1) >= 50) && \r\n              (getPourcentageCurrentBid(data.MiseAPrix, (data.somme !== 0) ? data.somme : 1) < 90)\">\r\n              {{'TONTINE_BID_TEXT11' | translate}}\r\n            </p>\r\n\r\n            <p class=\"error\" *ngIf=\"(getPourcentageCurrentBid(data.MiseAPrix, (data.somme !== 0) ? data.somme : 1) >= 90)\">\r\n              {{'TONTINE_BID_TEXT12' | translate}}\r\n            </p>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n  \r\n      </ion-col>\r\n    </ion-row>  \r\n    \r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\" *ngIf=\"currentTontine && currentTontine.tontine && currentTontine.tontine.administrator === 1 && !seance\">\r\n  <ion-button expand=\"full\" \r\n        color=\"warning\" \r\n        class=\"ion-text-uppercase\"\r\n        shape=\"round\"\r\n        (click)=\"openShareEdit(currentTontine)\">\r\n    {{ 'M_EDIT_NB_POOL' | translate }}\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "V890":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/my-tontines/tontine-detail/bid/bid-edit/bid-edit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">{{ 'TONTINE_EDIT_TEXT13' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"shareEditForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT18' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"nombre_part_max_membre\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_membre < minMemberShare\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MIN_MEMBER_SHARE' | translate : { share : minMemberShare }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT17' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"nombre_part_max_tontine\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_tontine < shareEditForm.value.nombre_part_max_membre\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MAX_TONTINE_SHARE' | translate \"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.nombre_part_max_tontine <  minStokvelShare\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_MIN_TONTINE_SHARE' | translate :  { share : minStokvelShare }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_DETAIL_TEXT19' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"numberlot\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col>\r\n\r\n\r\n        <div class=\"validation-errors\" *ngIf=\"shareEditForm.value.numberlot < 1\">\r\n          <div class=\"error-message\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span [innerHTML]=\"'ERROR_LOT_TONTINE_SHARE' | translate : { share: 1 }\"></span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      <!--   <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'TONTINE_EDIT_SHARE_TEXT9' | translate }}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"amount\" required=\"true\"></ion-input>\r\n          </ion-item> \r\n        </ion-col> \r\n\r\n        // Not use by the system now \r\n        <ion-col size=\"12\" >\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_SHARE_TEXT15' | translate }}</ion-label>\r\n            <ion-toggle formControlName=\"contributeCas1\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        // Not use by the system now \r\n        <ion-col size=\"12\" >\r\n          <ion-item>\r\n            <ion-label>{{ 'TONTINE_EDIT_SHARE_TEXT16' | translate }}</ion-label>\r\n            <ion-toggle formControlName=\"contributeCas2\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-grid>\r\n    <ion-row> \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\" [disabled]=\"canEdit()\" (click)=\"updateShare()\"\r\n                shape=\"round\">\r\n            {{ 'SAVE_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>     \r\n      <ion-col>\r\n          <ion-button expand=\"full\" \r\n                fill=\"outline\"\r\n                color=\"warning\" \r\n                class=\"ion-text-uppercase\"\r\n                shape=\"round\" (click)=\"closeShareEdit('cancel')\">\r\n            {{ 'CANCEL_TEXT' | translate }}\r\n          </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"ion-text-center\">\r\n      <ion-spinner *ngIf=\"loading\"  name=\"circles\"></ion-spinner>\r\n    </p>\r\n  </ion-grid>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "Yefa":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-time-edit/bid-time-edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BidTimeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidTimeEditComponent", function() { return BidTimeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bid_time_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bid-time-edit.component.html */ "LJQI");
/* harmony import */ var _bid_time_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bid-time-edit.component.scss */ "8Y1N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tontine.service */ "/WEl");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/my-tontines/services/tontine-error.service */ "YAE/");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");













let BidTimeEditComponent = class BidTimeEditComponent {
    constructor(fb, tontineService, ui, error, events, translate, modatCtrl, dateService, tontineError) {
        this.fb = fb;
        this.tontineService = tontineService;
        this.ui = ui;
        this.error = error;
        this.events = events;
        this.translate = translate;
        this.modatCtrl = modatCtrl;
        this.dateService = dateService;
        this.tontineError = tontineError;
        this.dayList = [];
        this.hourList = [];
        this.secList = [];
        this.minList = [];
        this.loadingReg = false;
        this.errorUser = false;
        this.errorTontine = false;
        this.errorFrequency = false;
        this.StartPeriod = [
            { label: 'startDay', checked: false },
            { label: 'startHour', checked: false },
            { label: 'startMin', checked: false },
            { label: 'startSnd', checked: false },
        ];
        this.EndPeriod = [
            { label: 'endDay', checked: false },
            { label: 'endHour', checked: false },
            { label: 'endMin', checked: false },
            { label: 'endSnd', checked: false },
        ];
        this.EditTimeBid = [];
        this.isDateValid = false;
        this.tontine = this.tontineService.getCurrentTontineData();
        for (let i = 0; i <= 31; i++) {
            this.dayList.push(i);
        }
        for (let i = 0; i <= 24; i++) {
            this.hourList.push({ label: i < 10 ? (0 + i.toString()) : i.toString(), value: i });
        }
        for (let i = 0; i <= 60; i++) {
            this.secList.push({ label: i < 10 ? (0 + i.toString()) : i.toString(), value: i });
        }
        for (let i = 0; i <= 60; i++) {
            this.minList.push({ label: i < 10 ? (0 + i.toString()) : i.toString(), value: i });
        }
        this.startDateSelect = new Date(this.tontine.tontine.date_debut);
    }
    ;
    ngOnInit() {
        this.tontineBidTime = this.fb.group({
            sessionTime: this.fb.group({
                startTime: this.fb.group({
                    startDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.dateService.formatDateTiret(this.startDateSelect), disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                    endDay: [''],
                })
            }),
            bidTime: this.fb.group({
                startTime: this.fb.group({
                    startDay: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    startHour: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    startMin: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    startSnd: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                }),
                endTime: this.fb.group({
                    endDay: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    endHour: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    endMin: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    endSnd: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                })
            })
        });
        this.initUserInfoForm();
    }
    initUserInfoForm() {
        this.EditTimeBid = {
            tontine_id: this.tontine.tontine.tontine_id,
            date_debut: this.tontine.tontine.date_debut,
            time_debut: this.tontine.tontine.time_debut,
            date_fin: [{ "valeur": this.tontine.tontine.date_fin, "type": this.tontine.tontine.type_date_fin }],
            time_debut_bid: '',
            time_fin_bid: '',
            date_fin_tontine_event: this.tontine.tontine.date_debut
        };
        switch (this.tontine.tontine.type_time_debut_bid) {
            case 'jours':
                this.tontineBidTime.get('bidTime.startTime.startDay').setValue(this.tontine.tontine.time_debut_bid);
                this.EditTimeBid.time_debut_bid = [{ "valeur": this.tontineBidTime.get('bidTime.startTime.startDay').value, "type": "jours" }];
                break;
            case 'heures':
                this.tontineBidTime.get('bidTime.startTime.startHour').setValue(this.tontine.tontine.time_debut_bid);
                this.EditTimeBid.time_debut_bid = [{ "valeur": this.tontineBidTime.get('bidTime.startTime.startHour').value, "type": "heures" }];
                break;
            case 'minutes':
                this.tontineBidTime.get('bidTime.startTime.startMin').setValue(this.tontine.tontine.time_debut_bid);
                this.EditTimeBid.time_debut_bid = [{ "valeur": this.tontineBidTime.get('bidTime.startTime.startMin').value, "type": "minutes" }];
                break;
            case 'secondes':
                this.tontineBidTime.get('bidTime.startTime.startSnd').setValue(this.tontine.tontine.time_debut_bid);
                this.EditTimeBid.time_debut_bid = [{ "valeur": this.tontineBidTime.get('bidTime.startTime.startSnd').value, "type": "secondes" }];
                break;
            default:
                break;
        }
        switch (this.tontine.tontine.type_time_fin_bid) {
            case 'jours':
                this.tontineBidTime.get('bidTime.endTime.endDay').setValue(this.tontine.tontine.time_fin_bid);
                this.EditTimeBid.time_fin_bid = [{ "valeur": this.tontineBidTime.get('bidTime.endTime.endDay').value, "type": "jours" }];
                break;
            case 'heures':
                this.tontineBidTime.get('bidTime.endTime.endHour').setValue(this.tontine.tontine.time_fin_bid);
                this.EditTimeBid.time_fin_bid = [{ "valeur": this.tontineBidTime.get('bidTime.endTime.endHour').value, "type": "heures" }];
                break;
            case 'minutes':
                this.tontineBidTime.get('bidTime.endTime.endMin').setValue(this.tontine.tontine.time_fin_bid);
                this.EditTimeBid.time_fin_bid = [{ "valeur": this.tontineBidTime.get('bidTime.endTime.endMin').value, "type": "minutes" }];
                break;
            case 'secondes':
                this.tontineBidTime.get('bidTime.endTime.endSnd').setValue(this.tontine.tontine.time_fin_bid);
                this.EditTimeBid.time_fin_bid = [{ "valeur": this.tontineBidTime.get('bidTime.endTime.endSnd').value, "type": "secondes" }];
                break;
            default:
                break;
        }
    }
    checkDate(date) {
        const currentDate = new Date();
        const inputDate = new Date(date);
        inputDate <= currentDate ? this.isDateValid = false : this.isDateValid = true;
    }
    OnDateChange(value) {
        let ValueDate = this.dateService.formatDateTiret(value);
        this.EditTimeBid.date_debut = ValueDate;
    }
    SelectStartPeriod(label) {
        let typeVal = '';
        switch (label) {
            case 'startDay':
                typeVal = 'jours';
                break;
            case 'startHour':
                typeVal = 'heures';
                break;
            case 'startMin':
                typeVal = 'minutes';
                break;
            case 'startSnd':
                typeVal = 'secondes';
                break;
            default:
                break;
        }
        this.EditTimeBid.time_debut_bid = [{ "valeur": this.tontineBidTime.get('bidTime.startTime.' + label).value, "type": typeVal }];
        this.StartPeriod.forEach(x => {
            this.tontineBidTime.get('bidTime.startTime.' + x.label).disable();
            if (x.label === label) {
                this.tontineBidTime.get('bidTime.startTime.' + label).enable();
            }
        });
    }
    SelectEndPeriod(label) {
        let typeVal = '';
        switch (label) {
            case 'endDay':
                typeVal = 'jours';
                break;
            case 'endHour':
                typeVal = 'heures';
                break;
            case 'endMin':
                typeVal = 'minutes';
                break;
            case 'endSnd':
                typeVal = 'secondes';
                break;
            default:
                break;
        }
        this.EditTimeBid.time_fin_bid = [{ "valeur": this.tontineBidTime.get('bidTime.endTime.' + label).value, "type": typeVal }];
        this.EndPeriod.forEach(y => {
            this.tontineBidTime.get('bidTime.endTime.' + y.label).disable();
            if (y.label === label) {
                this.tontineBidTime.get('bidTime.endTime.' + label).enable();
            }
        });
    }
    resetForm() {
        this.EditTimeBid.time_debut_bid = '';
        this.EditTimeBid.time_fin_bid = '';
        this.StartPeriod.forEach(x => {
            this.tontineBidTime.get('bidTime.startTime.' + x.label).enable();
            this.tontineBidTime.get('bidTime.startTime.' + x.label).setValue(0);
        });
        this.EndPeriod.forEach(y => {
            this.tontineBidTime.get('bidTime.endTime.' + y.label).enable();
            this.tontineBidTime.get('bidTime.endTime.' + y.label).setValue(0);
        });
    }
    closeBidTimeEdit() {
        this.modatCtrl.dismiss(null, 'cancel');
    }
    editTimeFunc() {
        this.loadingReg = true;
        this.tontineService.createAndUpdateDateTontine(this.EditTimeBid).subscribe((reponse) => {
            this.loadingReg = false;
            if (reponse && reponse.message === 'success') {
                this.translate.get('TONTINE_BID_SUCCESS1').subscribe(value => {
                    this.ui.presentToast(value);
                });
                this.events.publish('new-tontine');
                this.closeBidTimeEdit();
            }
        }, error => {
            this.loadingReg = false;
            if (error && error.error) {
                if (error.error.user_unauthorized) {
                    this.loadingReg = true;
                    this.error.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.editTimeFunc();
                        }
                        else {
                            this.loadingReg = false;
                            this.closeBidTimeEdit();
                        }
                    });
                }
                else {
                    this.closeBidTimeEdit();
                    this.tontineError.manageTontineError(error);
                }
            }
            else {
                this.closeBidTimeEdit();
                this.error.manageError(error);
            }
        });
    }
};
BidTimeEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_tontine_service__WEBPACK_IMPORTED_MODULE_7__["TontineService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_11__["UiService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_12__["EventService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_6__["DateserviceService"] },
    { type: src_app_dashboard_my_tontines_services_tontine_error_service__WEBPACK_IMPORTED_MODULE_10__["TontineErrorService"] }
];
BidTimeEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bid-time-edit',
        template: _raw_loader_bid_time_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bid_time_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BidTimeEditComponent);



/***/ }),

/***/ "cK1g":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-confirmation/bid-confirmation.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "fLjF":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid-edit/bid-edit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vd7H":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/my-tontines/tontine-detail/bid/bid.module.ts ***!
  \************************************************************************/
/*! exports provided: BidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidPageModule", function() { return BidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid.page */ "AIl2");
/* harmony import */ var _bid_time_edit_bid_time_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bid-time-edit/bid-time-edit.component */ "Yefa");
/* harmony import */ var _bid_confirmation_bid_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bid-confirmation/bid-confirmation.component */ "Cj7e");
/* harmony import */ var _bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bid-edit/bid-edit.component */ "GcHf");










const routes = [
    {
        path: '',
        component: _bid_page__WEBPACK_IMPORTED_MODULE_6__["BidPage"]
    }
];
let BidPageModule = class BidPageModule {
};
BidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _bid_page__WEBPACK_IMPORTED_MODULE_6__["BidPage"],
            _bid_time_edit_bid_time_edit_component__WEBPACK_IMPORTED_MODULE_7__["BidTimeEditComponent"],
            _bid_confirmation_bid_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BidConfirmationComponent"],
            _bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_9__["BidEditComponent"]
        ],
        entryComponents: [
            _bid_time_edit_bid_time_edit_component__WEBPACK_IMPORTED_MODULE_7__["BidTimeEditComponent"],
            _bid_confirmation_bid_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["BidConfirmationComponent"],
            _bid_edit_bid_edit_component__WEBPACK_IMPORTED_MODULE_9__["BidEditComponent"]
        ]
    })
], BidPageModule);



/***/ })

}]);
//# sourceMappingURL=bid-bid-module.js.map
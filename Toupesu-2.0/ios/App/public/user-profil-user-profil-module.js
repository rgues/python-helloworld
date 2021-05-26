(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profil-user-profil-module"],{

/***/ "6jfQ":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user/user-profil/user-profil.module.ts ***!
  \******************************************************************/
/*! exports provided: UserProfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilPageModule", function() { return UserProfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profil.page */ "CcRQ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








const routes = [
    {
        path: '',
        component: _user_profil_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilPage"]
    }
];
let UserProfilPageModule = class UserProfilPageModule {
};
UserProfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _user_profil_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilPage"]
        ]
    })
], UserProfilPageModule);



/***/ }),

/***/ "A1UG":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user/user-profil/user-profil.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "CcRQ":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/user/user-profil/user-profil.page.ts ***!
  \****************************************************************/
/*! exports provided: UserProfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilPage", function() { return UserProfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profil.page.html */ "XQGK");
/* harmony import */ var _user_profil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profil.page.scss */ "A1UG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/location.service */ "e009");
/* harmony import */ var src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/dateservice.service */ "oT51");
/* harmony import */ var src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/service/error.service */ "TkUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/countries/countries.component */ "KNHg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/service/form-utils.service */ "14LV");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/user.service */ "6Hie");
/* harmony import */ var src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/service/ui.service */ "QB/Y");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/auth/service/auth.service */ "RmnQ");
/* harmony import */ var src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/service/plugin.service */ "NxmL");
/* harmony import */ var _service_user_error_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../service/user-error.service */ "QzGi");
/* harmony import */ var src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/service/local-storage.service */ "y7ii");
/* harmony import */ var src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/service/events.service */ "r5fM");




















let UserProfilPage = class UserProfilPage {
    constructor(fb, location, navController, event, modatCtrl, formUtil, router, locate, userService, authService, dateService, errorService, userError, plugin, localStorage, ui) {
        this.fb = fb;
        this.location = location;
        this.navController = navController;
        this.event = event;
        this.modatCtrl = modatCtrl;
        this.formUtil = formUtil;
        this.router = router;
        this.locate = locate;
        this.userService = userService;
        this.authService = authService;
        this.dateService = dateService;
        this.errorService = errorService;
        this.userError = userError;
        this.plugin = plugin;
        this.localStorage = localStorage;
        this.ui = ui;
        this.loginTypeList = ['email', 'phone'];
        this.ui.hardwareBackButton();
        this.states = [];
        this.errorPhone = false;
        this.errorEmail = false;
        this.errorUser = false;
        this.typeMimeError = false;
        this.userPicture = null;
        this.canShowBackButton = true;
        this.counrtryApi = false;
        this.currentDate = this.dateService.formatDateTiret(new Date());
    }
    ngOnInit() {
        this.getWordCountries(false);
        this.initUserForm();
        this.validationMessage();
        this.showBackbutton();
    }
    // Form getters
    get userName() {
        return this.userDetailForm.get('username');
    }
    get firstName() {
        return this.userDetailForm.get('firstName');
    }
    get lastName() {
        return this.userDetailForm.get('lastName');
    }
    get loginType() {
        return this.userDetailForm.get('loginType');
    }
    get phoneError() {
        return this.userDetailForm.get('phone');
    }
    get country() {
        return this.userDetailForm.get('paysValue');
    }
    get city() {
        return this.userDetailForm.get('ville');
    }
    get occupation() {
        return this.userDetailForm.get('profession');
    }
    get emailError() {
        return this.userDetailForm.get('email');
    }
    get gender() {
        return this.userDetailForm.get('sexe');
    }
    get address() {
        return this.userDetailForm.get('address');
    }
    get birthdayError() {
        return this.userDetailForm.get('birthdayvalue');
    }
    // Validation message
    validationMessage() {
        this.location.get(['TONTINE_NEW_TEXT12', 'TONTINE_NEW_TEXT13', 'TONTINE_NEW_TEXT14',
            'TONTINE_NEW_TEXT18', 'TONTINE_EDIT_TEXT6', 'USER_DETAIL_TEXT6', 'USER_DETAIL_TEXT12',
            'USER_DETAIL_TEXT13', 'USER_DETAIL_TEXT8', 'USER_DETAIL_TEXT4', 'USER_DETAIL_TEXT7']).subscribe(trans => {
            this.validationMessages = {
                firstname: [
                    { type: 'required', message: trans.TONTINE_NEW_TEXT12 }
                ],
                lastName: [
                    { type: 'required', message: trans.TONTINE_NEW_TEXT13 }
                ],
                userName: [
                    { type: 'required', message: trans.USER_DETAIL_TEXT4 }
                ],
                address: [
                    { type: 'required', message: trans.USER_DETAIL_TEXT7 }
                ],
                birthday: [
                    { type: 'required', message: trans.TONTINE_NEW_TEXT14 }
                ],
                phone: [
                    { type: 'required', message: trans.TONTINE_NEW_TEXT18 }
                ],
                country: [
                    { type: 'required', message: trans.TONTINE_EDIT_TEXT6 }
                ],
                city: [
                    { type: 'required', message: trans.USER_DETAIL_TEXT6 }
                ],
                occupation: [
                    { type: 'required', message: trans.USER_DETAIL_TEXT8 }
                ],
                email: [
                    { type: 'required', message: trans.USER_DETAIL_TEXT12 },
                    { type: 'invalid', message: trans.USER_DETAIL_TEXT13 }
                ]
            };
        });
    }
    // cna show the back button
    showBackbutton() {
        const data = this.userService.getUserData();
        if (data && (!data.firstname || !data.lastname)) {
            this.canShowBackButton = false;
        }
    }
    // set The use default user country
    setUserCountry(countries) {
        const credentials = this.userService.getUserSecret();
        if (credentials && credentials.phone_prefix) {
            countries.forEach(state => {
                if (state && state.country_prefixe === credentials.phone_prefix) {
                    this.userDetailForm.get('paysValue').setValue(state.country_name);
                    this.userDetailForm.get('countryName').setValue(state.country_label);
                    this.counrtryApi = true;
                }
            });
        }
    }
    // Get all the word countries
    getWordCountries(refresh) {
        this.locate.getWordCountries(refresh).then((countries) => {
            if (countries && countries.length > 0) {
                this.states = countries;
                // Set the user country with the phone prefix
                this.setUserCountry(countries);
            }
        });
    }
    // check the phone
    checkPhone(phone) {
        this.errorPhone = this.formUtil.validatePhone(phone);
        if (!this.errorPhone) {
            this.phoneError.setErrors({ invalid: true });
        }
    }
    // check the email
    checkEmail(email) {
        this.errorEmail = this.formUtil.validateEmail(email);
        if (!this.errorEmail) {
            this.emailError.setErrors({ invalid: true });
        }
    }
    // cancel the profile update
    cancel() {
        this.initUserForm();
    }
    // Log out de app
    logout() {
        this.authService.removeUserSession();
        this.authService.removeAppLastSession();
        this.navController.setDirection('root');
        this.router.navigate(['/auth']);
    }
    // Get the user picture
    getPicture() {
        this.plugin.getPicture().subscribe((picture) => {
            if (picture) {
                setTimeout(() => {
                    this.userDetailForm.get('avatar').setValue(picture);
                    this.userDetailForm.get('picture').setValue(picture);
                    this.userPicture = picture;
                }, 300);
            }
            else {
                this.userPicture = this.user && this.user.picture ? `${this.user.picture}` : null;
            }
        });
    }
    // init the user form with his data
    initUserForm() {
        this.user = this.userService.getUserData();
        let userEmail = '';
        if (this.localStorage.getItem('first-email')) {
            const registerData = this.localStorage.getItem('first-email');
            userEmail = registerData ? registerData : '';
        }
        if (this.user.birthday) {
            const date = this.user.birthday.split('/');
            const month = (parseInt(date[1]) - 1);
            this.dateBirthday = new Date(date[2], month, date[0]);
        }
        let prefix = this.user && this.user.phone_with_prefix ? this.user.phone_with_prefix : '';
        prefix = prefix ? prefix.replace(this.user.phone, "") : '';
        this.userPicture = this.user && this.user.picture ? `${this.user.picture}` : null;
        this.userDetailForm = this.fb.group({
            username: [this.user.username || ''],
            sexe: [this.user.sexe || 'male', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            countryName: [this.user.pays || ''],
            firstName: [this.user.firstname || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [this.user.lastname || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loginType: [this.user.email ? 1 : 0],
            birthdayvalue: [this.user.birthday ? this.dateService.formatDateTiret(this.dateBirthday) : ''],
            birthday: [''],
            profession: [this.user.profession || ''],
            address: [this.user.address || ''],
            pays: [this.user.pays || ''],
            paysValue: [{ value: this.user.pays || '', disabled: this.user.pays ? true : false }],
            ville: [this.user.ville || ''],
            phone: [{ value: this.user.phone || '', disabled: this.user.phone ? true : false }],
            email: [{ value: this.user.email || userEmail, disabled: this.user.email ? true : false }],
            avatar: [this.user && this.user.picture ? `${this.user.picture}` : ''],
            picture: [this.user && this.user.picture ? `${this.user.picture}` : ''],
            phoneValue: [''],
            phoneId: [''],
            phone_prefix: [prefix ? prefix.trim() : ''],
            country_id: [''],
            emailValue: [this.user.email || '']
        });
    }
    // open the countries modal
    showCountries() {
        this.modatCtrl
            .create({
            component: src_app_shared_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__["CountriesComponent"]
        })
            .then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then((ans) => {
                if (ans && ans.role === 'select') {
                    this.states.forEach(state => {
                        if (state.code_country === ans.data) {
                            this.userDetailForm.get('paysValue').setValue(state.country_name);
                            this.userDetailForm.get('countryName').setValue(state.country_label);
                            this.counrtryApi = false;
                        }
                    });
                }
            });
        });
    }
    // check if it user first login
    isUserFisrtLogin() {
        if (this.localStorage.getItem('fisrt-login') === 'yes') {
            this, localStorage.removeItem('user-registration-data');
            this.router.navigateByUrl('/dashboard/user/security');
        }
    }
    // show login Message
    showMessage() {
        if (this.localStorage.getItem('fisrt-login') !== 'yes') {
            this.location.get('USER_DETAIL_MSG1').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
        else {
            this.location.get('PROFILE_SETUP').subscribe(value => {
                this.ui.presentToast(value);
            });
        }
    }
    // get the user profil
    getUserProfil() {
        this.loading = true;
        this.userService.getProfileUser().subscribe((user) => {
            this.loading = false;
            this.showMessage();
            this.userService.setUserToken(user.token);
            this.userService.setUserRole(user.role);
            this.userService.setUserData(user.user);
            this.userService.setUserBadge(user.badge_name);
            this.event.publish('user-data', user.user);
            this.canShowBackButton = true;
            if (user.modePayment) {
                this.userService.setUserPaymentMethod(user.modePayment);
            }
            this.isUserFisrtLogin();
        }, error => {
            this.loading = false;
            if (error.error.user_not_found) {
                this.loading = true;
                this.errorService.renewSession().then((data) => {
                    if (data && data.result === "OK") {
                        this.getUserProfil();
                    }
                    else {
                        this.loading = false;
                    }
                });
            }
            else {
                this.errorService.manageError(error);
            }
        });
    }
    // Create account and tontine
    updateAccount() {
        this.loading = true;
        if (this.userDetailForm.value.birthdayvalue) {
            this.userDetailForm.get('birthday').setValue(this.dateService.formatDateSplash(this.userDetailForm.value.birthdayvalue));
        }
        if (this.userDetailForm.value.paysValue) {
            this.userDetailForm.get('pays').setValue(this.userDetailForm.value.paysValue);
        }
        if (this.userDetailForm.value.emailValue) {
            this.userDetailForm.get('emailValue').setValue('');
        }
        else {
            this.userDetailForm.get('emailValue').setValue(this.userDetailForm.value.email);
        }
        this.userService.updateProfileUser(this.userDetailForm.value).subscribe((reponse) => {
            if (reponse && reponse.token) {
                this.getUserProfil();
            }
        }, error => {
            if (error && error.error) {
                if (error && error.error && error.error.user_not_found) {
                    this.errorService.renewSession().then((data) => {
                        if (data && data.result === "OK") {
                            this.updateAccount();
                        }
                        else {
                            this.loading = false;
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.userError.manageUserError(error);
                }
            }
            else {
                this.loading = false;
                this.errorService.manageError(error);
            }
        });
    }
};
UserProfilPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] },
    { type: src_app_shared_service_events_service__WEBPACK_IMPORTED_MODULE_19__["EventService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: src_app_shared_service_form_utils_service__WEBPACK_IMPORTED_MODULE_12__["FormUtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
    { type: src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: src_app_shared_service_dateservice_service__WEBPACK_IMPORTED_MODULE_7__["DateserviceService"] },
    { type: src_app_shared_service_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"] },
    { type: _service_user_error_service__WEBPACK_IMPORTED_MODULE_17__["UserErrorService"] },
    { type: src_app_shared_service_plugin_service__WEBPACK_IMPORTED_MODULE_16__["PluginService"] },
    { type: src_app_shared_service_local_storage_service__WEBPACK_IMPORTED_MODULE_18__["LocalStorageService"] },
    { type: src_app_shared_service_ui_service__WEBPACK_IMPORTED_MODULE_14__["UiService"] }
];
UserProfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profil',
        template: _raw_loader_user_profil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserProfilPage);



/***/ }),

/***/ "XQGK":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user/user-profil/user-profil.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons  slot=\"start\">\r\n      <ion-back-button  *ngIf=\"canShowBackButton\"  color=\"primary\" defaultHref=\"/dashboard/user\" slot=\"text-only\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"{{userPicture ? userPicture : 'assets/post-img.svg'}}\" class=\"thumb-img\">\r\n    </ion-avatar>\r\n    <ion-title class=\"no-padding ion-margin-start\">\r\n      {{ 'TONTINE_NEW_TEXT9' | translate }} <span>\r\n        <ion-icon color=\"warning\" name=\"create\" slot=\"icon-only\"></ion-icon>\r\n      </span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"user-profil\">\r\n  <form [formGroup]=\"userDetailForm\">\r\n    <ion-grid>\r\n      <ion-row *ngIf=\"!canShowBackButton\">\r\n        <ion-col class=\"ion-margin-top\">\r\n          <ion-label color=\"danger\">\r\n            <ion-icon color=\"danger\" name=\"information-circle-outline\" slot=\"icon-only\"> </ion-icon>\r\n            <span [innerHTML]=\"'COMPLETE_ACCOUNT_MESSAGE' | translate\"></span>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'FIRSTNAME_TEXT' | translate }}*</ion-label>\r\n            <ion-input autofocus='true' type=\"text\" formControlName=\"firstName\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.firstname\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"firstName.hasError(validation.type) && (firstName.dirty || firstName.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{'LASTNAME_TEXT' | translate }}*</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"lastName\" required></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.lastName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"lastName.hasError(validation.type) && (lastName.dirty || lastName.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'USERNAME_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"username\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.userName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"userName.hasError(validation.type) && (userName.dirty || userName.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'M_GENDER' | translate }}*</ion-label>\r\n            <ion-select formControlName=\"sexe\">\r\n              <ion-select-option value=\"male\">{{ 'MALE_TEXT' | translate }}</ion-select-option>\r\n              <ion-select-option value=\"female\">{{ 'FEMALE_TEXT' | translate }}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>{{ 'BIRTHDAY_TEXT' | translate }}</ion-label>\r\n            <ion-datetime formControlName=\"birthdayvalue\" [max]=\"currentDate\" displayFormat=\"DDDD D MMM, YYYY\" pickerFormat=\"DD MMMM YYYY\">\r\n            </ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.birthday\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"birthdayError.hasError(validation.type) && (birthdayError.dirty || birthdayError.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item [disabled]=\"userDetailForm.value.paysValue && !counrtryApi ? true: false\" (click)=\"showCountries()\">\r\n            <ion-label>{{'COUNTRY_TEXT' | translate}} : </ion-label>\r\n            <p><strong> {{ userDetailForm.value.countryName }} </strong> </p>          \r\n            <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.country\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"country.hasError(validation.type) && (country.dirty || country.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">{{ 'ADDRESS_TEXT' | translate }}</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessages.address\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"address.hasError(validation.type) && (address.dirty || address.touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                  <span [innerHTML]=\"validation.message\"></span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'CITY_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"ville\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.city\">\r\n              <div class=\"error-message\" *ngIf=\"city.hasError(validation.type) && (city.dirty || city.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'OCCUPATION_TEXT' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"profession\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.occupation\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"occupation.hasError(validation.type) && (occupation.dirty || occupation.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-input (ionChange)=\"checkEmail(userDetailForm.value.email)\" type=\"email\"\r\n              placeholder=\"{{ 'M_EMAIL_MSG' | translate }}\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"emailError.hasError(validation.type) && (emailError.dirty || emailError.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-input type=\"text\" (ionChange)=\"checkPhone(userDetailForm.value.phone)\"\r\n              placeholder=\"{{ 'M_PHONE_MSG' | translate }}\" formControlName=\"phone\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.phone\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"phoneError.hasError(validation.type) && (phoneError.dirty || phoneError.touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span [innerHTML]=\"validation.message\"></span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    <!--   <ion-row *ngIf=\"canShowBackButton\">\r\n        <ion-col class=\"ion-margin-top\">\r\n          <ion-label color=\"danger\">\r\n            <ion-icon color=\"danger\" name=\"information-circle-outline\" slot=\"icon-only\"> </ion-icon>\r\n            <span [innerHTML]=\"'IMAGE_MESSAGE' | translate\"></span>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n<!--       <ion-row   *ngIf=\"canShowBackButton\">\r\n        <ion-col class=\"ion-text-end\">\r\n          <ion-button color=\"primary\" size=\"medium\" class=\"ion-text-capitalize\" (click)=\"getPicture()\">\r\n            {{ 'USER_DETAIL_UPLOAD' | translate }}\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </ion-grid>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-padding ion-text-center\">\r\n  <ion-button expand=\"full\" [disabled]=\"loading || userDetailForm.invalid\" (click)=\"updateAccount()\" color=\"warning\"\r\n    class=\"ion-text-uppercase\" shape=\"round\">\r\n    {{'SAVE_TEXT' | translate}}\r\n  </ion-button>\r\n  <ion-spinner *ngIf=\"loading\" name=\"circles\"></ion-spinner>\r\n</ion-footer>");

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
//# sourceMappingURL=user-profil-user-profil-module.js.map
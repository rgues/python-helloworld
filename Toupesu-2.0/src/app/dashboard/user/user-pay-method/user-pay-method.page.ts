import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/shared/service/error.service';
import { TranslateService } from '@ngx-translate/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { FormUtilsService } from 'src/app/shared/service/form-utils.service';
import { PaymentGlobalDataService } from 'src/app/shared/service/payment-global-data.service';
import { UserService } from '../service/user.service';
import { UiService } from 'src/app/shared/service/ui.service';
import { EventService } from 'src/app/shared/service/events.service';

interface PaymentMethod {
  id: number;
  logo: string;
  name: string;
  placeholder: string;
}

@Component({
  selector: 'app-user-pay-method',
  templateUrl: './user-pay-method.page.html',
  styleUrls: ['./user-pay-method.page.scss'],
})
export class UserPayMethodPage implements OnInit {

  userPayMethodForm: FormGroup;
  paymentMethods: PaymentMethod[];
  errorPhone: boolean;
  errorEmail: boolean;
  errorToken: boolean;
  loading: boolean;
  errorAccount: boolean;
  loadingPayment: boolean;
  currentPaymentMethod: any;
  userData: any;
  defaultState: any;
  userPicture: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private paymentData: PaymentGlobalDataService,
    private errorService: ErrorService,
    private locate: LocationService,
    private location: TranslateService,
    private formUtil: FormUtilsService,
    private event: EventService,
    private ui: UiService
  ) {
    this.paymentMethods = [];
    this.errorPhone = false;
    this.errorEmail = false;
    this.loading = false;
    this.loadingPayment = false;
    this.userData = this.userService.getUserData();
    this.userPicture = this.userData && this.userData.picture ? `${this.userData.picture}` : null;
    this.event.subscribe('user-data', user => {
      this.userPicture = user && user.picture ? user.picture : null;
    });
  }

  get operatorName() {
    return this.userPayMethodForm.get('operatorName');
  }

  get phone() {
    return this.userPayMethodForm.get('phone');
  }

  get numberAccount() {
    return this.userPayMethodForm.get('numberAccount');
  }

  ngOnInit() {
    this.getCurrentCountry(false);
    this.getAllMethodPaymentType();
    this.initPaymentForm();
  }



  // check if emial or phone is valid
  checckEmailOrPhone(inputValue: string, index: number) {
    this.errorPhone = false;
    this.errorEmail = false;
    switch (this.paymentMethods[index].name) {
      case 'ORANGE MONEY':
        this.errorPhone = !this.formUtil.validatePhone(inputValue);
        break;

      case 'MTN MOBILE MONEY':
        this.errorPhone = !this.formUtil.validatePhone(inputValue);
        break;

      case 'PAYPAL':
        this.errorEmail = !this.formUtil.validateEmail(inputValue);
        break;

      case 'OZOW':
        this.errorEmail = !this.formUtil.validateEmail(inputValue);
        break;

      default:
        break;
    }
  }

  initPaymentForm() {
    const currentPayment = this.paymentData.getDefaultPaymentMethod();
    this.currentPaymentMethod = currentPayment;
    this.userPayMethodForm = this.fb.group({
      modepaiement_id: [currentPayment ? currentPayment.modepaiement_id : ''],
      typePayment: [currentPayment ? currentPayment.typepaiement_id : ''],
      typePaymentIndex: [0],
      numberAccount: [currentPayment ? currentPayment.numero_compte : '', Validators.required],
      nameAccount: [currentPayment ? currentPayment.nametypepaiement : '']
    });
  }

  // Set the default country
  getCurrentCountry(refresher: boolean) {
    this.locate.getCurrentCountryInfo(refresher).then((country: any) => {
      if (country) {
        this.defaultState = country.settings;
      }
    }).catch(error => {
    });
  }

  // Refresh the list
  refreSher(event) {
    this.getCurrentCountry(false);
    this.getAllMethodPaymentType();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  // initialize the payment method
  initPaymentMethod(payment: any,index: number){
    if (this.currentPaymentMethod && this.currentPaymentMethod.nametypepaiement === payment.name) {
      this.userPayMethodForm.get('typePaymentIndex').setValue(index);
      this.updatePaymentMethod(index);
    }
  }

  // can set payment method
  canSetPaymentMethod(payment: any){
     return payment.active === 1 && (String(this.userData.pays) === String(payment.country_name)
     || (this.defaultState && this.defaultState.country_id === payment.country_id && !this.userData.pays))
  }

  // get all payment method
  getAllMethodPaymentType() {
    this.loadingPayment = true;
    this.paymentMethods = [];
    this.userService.getAllMethodPaymentType().subscribe((reponse: any) => {
      this.loadingPayment = false;
      if (reponse && reponse.typePayment && reponse.typePayment.length > 0) {
        let index = 0;
        reponse.typePayment.forEach(payment => {
          // Get payment method for current user's country or default country
          if (this.canSetPaymentMethod(payment)) {
            switch (payment.name) {
              case 'ORANGE MONEY':
                this.location.get('REGISTER_MPHONE').subscribe(value => {
                  this.paymentMethods.push({
                    id: payment.id, logo: 'assets/orange.jpg', name: payment.name,
                    placeholder: value
                  });
                });
                this.initPaymentMethod(payment,index);
                index++;
                break;

              case 'MTN MOBILE MONEY':
                this.location.get('REGISTER_MPHONE').subscribe(value => {
                  this.paymentMethods.push({
                    id: payment.id, logo: 'assets/mtn.jpg', name: payment.name,
                    placeholder: value
                  });
                });
                this.initPaymentMethod(payment,index);
                index++;
                break;

              case 'PAYPAL':
                this.location.get('EMAIL_TEXT').subscribe(value => {
                  this.paymentMethods.push({
                    id: payment.id, logo: 'assets/paypal.jpg', name: payment.name,
                    placeholder: value
                  });
                });
                this.initPaymentMethod(payment,index);
                index++;
                break;

              case 'OZOW':
                this.location.get('EMAIL_TEXT').subscribe(value => {
                  this.paymentMethods.push({
                    id: payment.id, logo: 'assets/ozow.png', name: payment.name,
                    placeholder: value
                  });
                });
                this.initPaymentMethod(payment,index);
                index++;
                break;

              default:
                this.updatePaymentMethod(0);
                index++;
                break;
            }
          }
        });
        // Check if one the user method has been selected
        if (this.userPayMethodForm.value.nameAccount === '') {
          this.updatePaymentMethod(0);
        }
      }
    }, error => {
      this.loadingPayment = false;
      if (error && error.error && error.error.user_not_found) {
        this.errorService.renewSession();
      } else {
        this.errorService.manageError(error);
      }
    });
  }

  // Update the payment method
  updatePaymentMethod(index) {
    if (this.paymentMethods && this.paymentMethods.length > 0) {
      this.userPayMethodForm.get('typePayment').setValue(this.paymentMethods[index].id);
      this.userPayMethodForm.get('nameAccount').setValue(this.paymentMethods[index].name);
    }
  }

  // create the payment method
  createUserPaymentMethod() {
    this.loading = true;
    this.userService.addMethodPaymentUser(this.userPayMethodForm.value).subscribe(
      (user: any) => {
        this.loading = false;
        if (user && user.message === 'success') {
          this.userService.setUserPaymentMethod(user.modePayment);
          this.location.get('USER_PAYMENT_MSG1').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.userService.setUserToken(user.token);
        }
      }, error => {
        this.loading = false;
        if (error && error.error) {

          if (error.error.numberAccount_already_exist) {
            this.location.get('USER_PAYMENT_MSG3').subscribe(value => {
              this.ui.presentToast(value);
            });
          }

          if (error.error.token) {
            this.loading = true;
            this.errorService.renewSession().then((data: any) => {
              if (data && data.result === "OK") {
                  this.createUserPaymentMethod();
              } else {
                this.loading = false;
              }
            });
          }
      
        } else {
          this.errorService.manageError(error);
        }
      });
  }

  // update the payment method
  updateUserPaymentMethod() {
    this.loading = true;
    this.userService.updateMethodPaymentUser(this.userPayMethodForm.value).subscribe(
      (user: any) => {
        this.loading = false;
        if (user && user.message === 'success') {
          this.userService.setUserPaymentMethod(user.modePayment);
          this.location.get('USER_PAYMENT_MSG4').subscribe(value => {
            this.ui.presentToast(value);
          });
          this.userService.setUserToken(user.token);
        }
      }, error => {
        this.loading = false;
        if (error && error.error) {
          if (error.error.numberAccount_already_exist) {
            this.location.get('USER_PAYMENT_TEXT1').subscribe(value => {
              this.ui.presentToast(value);
            });
          }
          if (error.error.token) {
            this.loading = true;
            this.errorService.renewSession().then((data: any) => {
                  if (data && data.result === "OK") {
                      this.updateUserPaymentMethod();
                  } else {
                    this.loading = false;
                  }
            });
          }
        } else {
          this.errorService.manageError(error);
        }
      });
  }

  // Save the payment mode
  savePaymentMethod() {
    if (this.userPayMethodForm.value.modepaiement_id) {
      this.updateUserPaymentMethod();
    } else {
      this.createUserPaymentMethod();
    }
  }

}

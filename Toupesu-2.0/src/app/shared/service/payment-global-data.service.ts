import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';import { UserService } from 'src/app/dashboard/user/service/user.service';
;


interface PaymentMethod {
  id: number;
  logo: string;
  currency: string;
  country_id: number;
  name: string;
  placeholder ?: string;
  label?: string;
  handling_fees?: number;
  type_handling_fees?: string;
  type ?: string
}

@Injectable({
  providedIn: 'root'
})
export class PaymentGlobalDataService {

  states: any;

  constructor(
    private translate: TranslateService,
    private userService: UserService
  ) { }

  // get the default payment method
  getDefaultPaymentMethod() {
    const userPayment = this.userService.getUserpaymentMethod();
    let currentPayment = null;
    if (userPayment && userPayment.length > 0) {
      userPayment.forEach(payment => {
        if (payment.isActive === 1) {
          currentPayment = payment;
        }
      });
    }

    return currentPayment;
  }

  // remove space
  removeInputSpace(formValue: any) {
    const input = String(formValue);
    return input.replace(/\s/g, "");
  }

  // check if it is mobile operator
  isMobileOperator(paymentData: any) {
    let isMobile = false;
    if (paymentData && paymentData.name && paymentData.name !== 'PAYPAL' && paymentData.name !== 'OZOW' && paymentData.name !== 'WALLET') {
      isMobile = true;
    }
    return isMobile;
  }

  // check if paypal message is define
  hasPaypalMessage(paypalMessage: string, paymentData: any) {
    let canShow = false;
    if (paypalMessage && paymentData && paymentData.name && paymentData.name === 'PAYPAL') {
      canShow = true;
    }
    return canShow;
  }

  // check if can show paypal button
  hasPaypalButton(paypal_initialized: boolean, paymentData: any) {
    let canShow = false;
    if (!paypal_initialized || paymentData && paymentData.name && paymentData.name === 'PAYPAL') {
      canShow = true;
    }
    return canShow;
  }

  // can make payment 
  canShowPayment(formValid: boolean, paymentData: any, phone: string, hasPhoneError: boolean) {
    let canpay = false;
    if (formValid && paymentData && paymentData.name && (paymentData.name === 'WALLET' || paymentData.name === 'OZOW' || (phone && !hasPhoneError && (paymentData.name === 'ORANGE MONEY' || paymentData.name === 'MTN MOBILE MONEY')))) {
      canpay = true;
    }
    return canpay;
  }

  // can make recharge
  canMakeRecharge(formValid: boolean, paymentData: any, phone: string, hasPhoneError: boolean) {
    let canpay = false;
    if ((formValid && paymentData && paymentData.name &&
      (paymentData.name !== 'PAYPAL' || (phone && !hasPhoneError && (paymentData.name === 'ORANGE MONEY' || paymentData.name === 'MTN MOBILE MONEY'))))) {
      canpay = true;
    }
    return canpay;
  }

  // Format payment method response
  formatPaymentMethodResponseContribution(paymentMethodsData: any) {
    const paymentMethods: PaymentMethod[] = [];

    paymentMethodsData.forEach(payment => {

      if (payment.active === 1) {
        switch (payment.name) {

          case 'ORANGE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/orange.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'MTN MOBILE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/mtn.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees
              });
            });
            break;

          case 'PAYPAL':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/paypal.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'OZOW':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/ozow.png',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          default:
            break;
        }
      }
    });

    return paymentMethods;
  }

  // Format the payment response for debt
  formatPaymentMethodForDebt(paymentMethodsData: any) {
    const paymentMethods: PaymentMethod[] = [];
    
    paymentMethodsData.forEach(payment => {

      if (payment.active === 1) {
        
        switch (payment.name) {

          case 'ORANGE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/orange.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees :  payment.handling_fees,
                type_handling_fees : payment.type_handling_fees
              });
            });
            break;

          case 'MTN MOBILE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/mtn.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees :  payment.handling_fees,
                type_handling_fees : payment.type_handling_fees
              });
            });
            break;

          case 'PAYPAL':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/paypal.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees :  payment.handling_fees,
                type_handling_fees : payment.type_handling_fees
              });
            });
            break;

          case 'OZOW':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/ozow.png',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees :  payment.handling_fees,
                type_handling_fees : payment.type_handling_fees
              });
            });
            break;

            case 'CASH':
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/wallet-icon.svg',
                currency: payment.currency, name: payment.name, placeholder: '',
                handling_fees :  payment.handling_fees,
                type_handling_fees : payment.type_handling_fees
              });
              break;    

          default:
            break;
        }
      }
    });

    return paymentMethods;
  }


  // format payment method for recharge
  formatPaymentMethodRecharge(paymentMethodsData: any, tontine: any) {
    const paymentMethods: PaymentMethod[] = [];
    
    paymentMethodsData.forEach(payment => {

      if (payment.active === 1) {
        switch (payment.name) {

          case 'ORANGE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/orange.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'MTN MOBILE MONEY':
            this.translate.get('REGISTER_MPHONE').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/mtn.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'PAYPAL':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/paypal.jpg',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'OZOW':
            this.translate.get('EMAIL_TEXT').subscribe(value => {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/ozow.png',
                currency: payment.currency, name: payment.name, placeholder: value,
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'OPERATOR'
              });
            });
            break;

          case 'CASH':
            if (tontine && tontine.tontine && tontine.tontine.tontine_payment_type_id === 1) {
              paymentMethods.push({
                id: payment.id, country_id: payment.country_id, logo: 'assets/wallet-icon.svg',
                currency: payment.currency, name: payment.name, placeholder: '',
                handling_fees: payment.handling_fees,
                type_handling_fees: payment.type_handling_fees,
                type: 'CASH'
              });
            }
            break;

          default:
            break;
        }
      }
    });

    return paymentMethods;
  }


  // format withdraw data
  formatWithdrawData(paymentData: any) {
    const paymentMethods: PaymentMethod[] = [];
    paymentData.forEach(payment => {
      if (payment.active === 1) {
        switch (payment.name) {

          case 'MTN MOBILE MONEY':
            paymentMethods.push({
              id: payment.id, country_id: payment.country_id,
              logo: 'assets/mtn.jpg', name: payment.name, label: payment.name, currency: payment.currency
            });
            break;

          case 'ORANGE MONEY':
            paymentMethods.push({
              id: payment.id, country_id: payment.country_id,
              logo: 'assets/orange.jpg', name: payment.name, label: payment.name, currency: payment.currency
            });
            break;

          case 'PAYPAL':
            paymentMethods.push({
              id: payment.id, country_id: payment.country_id,
              logo: 'assets/paypal.jpg', name: payment.name, label: `${payment.name}(${payment.currency})`, currency: payment.currency
            });
            break;

          default:
            break;
        }
      }
    });
    return paymentMethods;
  }

  // Format countries data 
  formatCountriesData(countriesData: any, hasAll ?: boolean ) {
    const states = [];
    countriesData.forEach(country => {
      if (country.active === 1 || hasAll) {
        const countryLabel = `COUNTRY_${country.code_country}`;
        this.translate.get(countryLabel).subscribe(value => {
          states.push({
            country_id: country.country_id,
            country_name: country.country_name,
            handling_fees: country.handling_fees,
            type_handling_fees: country.type_handling_fees,
            device_id: country.device_id,
            device_name: country.device_name,
            created_at: country.created_at,
            currency_label: country.currency_label,
            country_flag: country.country_flag,
            country_prefixe: country.country_prefixe,
            code_country: country.code_country,
            default_country: country.default_country,
            country_label: value,
            country_key: countryLabel
          });
        });
      }
    });

    return states;
  }

  // Calucalte the payment with handlfees
  getHandleFeesWithDevise(amountShare: any, devise: string, handleFees: any, handleFeesType: string) {
    let amount = 0;
    amount = parseFloat(amountShare) > 0 ? parseFloat(amountShare) : 0;
    if (handleFees !== 0) {
      const handlefees = handleFees ? parseFloat(handleFees) : 1;
      if (handleFeesType === 'pourcentage') {
        amount = amount * (1 + (handlefees / 100));
      } else {
        amount = amount + handlefees;
      }
    }

    if (devise === 'XAF' || devise === 'ZAR' || devise === 'XOF') {
      return Math.ceil(amount);
    } else {
      return parseFloat(Number(amount).toFixed(2));
    }
  }

  
  notIn(paymentMethods: any[], paymentName: any) {
    let methodNotIn = true;
    paymentMethods.forEach(pay => {
      if (`${pay.name}${pay.currency}` === `${paymentName.name}${paymentName.currency}`) {
        methodNotIn = false;
      }
    });
    return methodNotIn;
  }

  // filter the payment method by currency
  filterPaymentMethodByCurrency(allPaymentMethods: any[], userWallet: any[]) {
    let i = 0;
    const paymentMethods = [];
    while (i < userWallet.length) {
      allPaymentMethods.forEach(payment => {
        if (payment.currency === userWallet[i].device_name && this.notIn(paymentMethods, payment)) {
          paymentMethods.push(payment);
        }
      });
      i++;
    }
    return paymentMethods;
  }

    // filter the payment method by currency
    filterPaymentMethodByDevise(allPaymentMethods: any[], userWallet: any[]) {
      let i = 0;
      const paymentMethods = [];
      while (i < userWallet.length) {
        allPaymentMethods.forEach(payment => {
          if ( payment.currency === userWallet[i].currency_name && this.notIn(paymentMethods, payment)) {
            paymentMethods.push(payment);
          }
        });
        i++;
      }
      return paymentMethods;
    }

      // Get the payment name
  getPaymentName(paymentMethods:any[],paymentId: number) {
    let paymentName = '';
    paymentMethods.forEach(method => {
      if (method && method.id === paymentId) {
        paymentName = method.name;
      }
    });
    return paymentName;
  }


}

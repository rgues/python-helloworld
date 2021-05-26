import { Injectable } from '@angular/core';
import { CurrencyService } from 'src/app/shared/service/currency.service';
import { UtilService } from 'src/app/shared/service/util.service';
import { UserService } from '../../user/service/user.service';


@Injectable({
  providedIn: 'root'
})
export class SwapGlobalDataService {

  currentUserData: any;

  constructor(
    private userService: UserService,
    private util: UtilService,
    private currency: CurrencyService
  ) {
    this.currentUserData = this.userService.getUserData();
  }


  hasCurrency(wallet: any[], currency: string) {
    const currencyData = wallet.filter(data => { return data.device_name === currency });
    return currencyData && currencyData.length > 0 ? true : false;
  }

  // check if the user can make instant request
  checkRequestCanInstantRequest(currency: any, wallet: any, amount: any, fees: any) {
    let canMakeRequest = true;
    let requestAmount = parseFloat(amount) + parseFloat(fees);
    if (wallet && wallet.length > 0 && this.hasCurrency(wallet, currency)) {
      wallet.forEach(data => {
        if ((parseFloat(data.solde_device) < requestAmount) && (data.device_name === currency)) {
          canMakeRequest = false;
        }
      });
    } else {
      canMakeRequest = false;
    }

    return canMakeRequest;
  }

  // get the currencies rates 
  getCurrencyRateExchange(swapRates: any, currencyFrom: string, currencyTo: string) {
    let rate = null;
    return new Promise((resolve, reject) => {
      if (swapRates && swapRates.length > 0) {
        swapRates.forEach((currencyData: any) => {
          if (currencyData.currency_from === currencyFrom && currencyData.currency_to === currencyTo) {
            rate = currencyData;
          }
        });
      }
      resolve(rate);
    });
  }

  // Get exchange fees
  getExchangeFees(swapRates: any, currencyFrom: string, currencyTo: string, amount: number) {
    return new Promise((resolve, reject) => {
      let exchangeFees = 0;
      this.getCurrencyRateExchange(swapRates, currencyFrom, currencyTo).then((rate: any) => {
        if (rate) {
          if (rate.type === "pourcentage") {
            exchangeFees = parseFloat(Number(((parseFloat(rate.rate_value) / 100) * amount)).toFixed(2));
          } else {
            exchangeFees = parseFloat(rate.rate_value);
          }
        }
        resolve(exchangeFees);
      });
    });
  }

  // Get conversion value 
  getConversionValue(currencyFrom: string, currencyTo: string, amount: number) {
    return new Promise((resolve, reject) => {
      if (currencyFrom !== currencyTo && amount > 0) {
        this.currency.conversionRateValue(currencyFrom, currencyTo)
          .then((amountConvert: any) => {
            resolve(Number(amountConvert * amount).toFixed(2));
          });
      } else {
        amount ? resolve(amount) : resolve(0);
      }
    });
  }

  // Get the percentage of succes
  getSuccessPercentage(percent: any) {
    const percentValue = Math.ceil(percent / 20);
    const iteration = [];
    for (let i = 1; i <= percentValue; i++) {
      iteration.push(i);
    }
    return iteration;
  }

  // get percentage of loss
  getLossPercentage(percent) {
    const percentValue = 5 - Math.ceil(percent / 20);
    const iteration = [];
    for (let i = 1; i <= percentValue; i++) {
      iteration.push(i);
    }
    return iteration;
  }

  // can delete swap 
  canDeleteSwap(request: any) {
    let ican = true;
    if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'pending'))) {
      ican = false;
    }
    return ican;
  }


  // can delete swap 
  canEditSwap(request: any) {
    let ican = true;
    if (request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'pending')) {
      ican = false;
    }
    return ican;
  }

  //
  canArchiveSwap(request: any) {
    let ican = false;
    if ((request.infos_status_request && (request.infos_status_request.description === 'completed' || request.infos_status_request.description === 'expired'))) {
      ican = true;
    }
    return ican;
  }

  // can show all requests
  canShowAllRequests(request: any) {
    return (request && request.infos_status_request && request.infos_status_request.description === 'initiated' && parseInt(request.user_id_from) !== parseInt(this.currentUserData.id));
  }

  // calculate the mathcing exchange fees
  matchingExchageFees(swapRates: any, currencyTo: string, currencyForm: string, requestData: any) {
    return new Promise((resole, reject) => {
      this.getCurrencyRateExchange(swapRates, currencyTo, currencyForm).then((rate: any) => {
        let exchangeFees = 0;
        let i = 0;
        const requestCopy = requestData;
        requestData.forEach(request => {
          if (rate) {
            if (rate.type === "pourcentage") {
              exchangeFees = parseFloat(Number(((parseFloat(rate.rate_value) / 100) * parseFloat(request.amount))).toFixed(2));
              requestCopy[i].fees = exchangeFees;
            } else {
              exchangeFees = parseFloat(rate.rate_value);
              requestCopy[i].fees = exchangeFees;
            }
          }
          i++;
        });
        resole(requestCopy);
      });
    });
  }

  // checf if a request has expired
  hasExpired(request: any) {
    let expired = false;
    if (request && request.temps_restant) {
      if (request.temps_restant[0].heures === 0 && request.temps_restant[0].minutes === 0 && request.temps_restant[0].secondes === 0) {
        expired = true;
      }
    }
    return expired;
  }

  // Check if a currency is in the user currencies list
  IsCurrencyIn(currencies: any, currency: any) {
    let isIn = false;
    const matchCurrencies = currencies.filter(curr => { return curr.device_name === currency });
    if (matchCurrencies && matchCurrencies.length > 0) {
      isIn = true;
    }
    return isIn;
  }

  // Get request that match the user Currencies
  filterByUserCurrency(requests: any, currencies: any) {
    const requestMatching = [];
    if (currencies && currencies.length > 0) {
      if (requests && requests.length > 0) {
        requests.forEach(data => {
          if (this.IsCurrencyIn(currencies, data.infos_currency_to.name)) {
            requestMatching.push(data);
          }
        });
      }
    }
    return requestMatching;
  }

  
  filterALLRequestData(requests: any) {
    let requestsList = this.util.orderByKeyUp(requests, 'updated_at');
    requestsList = requestsList && requestsList.length > 0 ? this.util.orderByKeyUpTime(requestsList, 'temps_restant') : [];
    let formatData = [];
    requestsList.forEach(request => {
      if (this.canShowAllRequests(request)) {
        formatData.push({ select: false, canSelect: true, data: request });
      }
    });
    return formatData;
  }

}

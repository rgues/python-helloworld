import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }


  
  // Get the troncate name
  troncateName(value: string, nbDigit: number) {
    return value && value.length < nbDigit ? value : value ? value.substring(0, nbDigit) + '...' : ''
  }

  // Remove space
  removeSpace(inputData: any) {
      const input = String(inputData);
      return input.replace(/\s/g, "");
  }

  validateEmail(myEmail: string) {
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[.][a-z]{2,4}$/;
    if (!regex.test(myEmail)) {
      return false;
    } else {
      return true;
    }
  }

  validatePhone(myPhone: string) {
    const regex = /^[0-9]{6,13}$/;
    if (!regex.test(myPhone)) {
      return false;
    } else {
      return true;
    }
  }

  validatePin(myPin: string) {
    const regex = /^[0-9]{5}$/;
    if (!regex.test(myPin)) {
      return false;
    } else {
      return true;
    }
  }

  validateMisaPrix(miseAprix: string) {
    const regex = /^[0-9]+$/;
    if (!regex.test(miseAprix)) {
      return false;
    } else {
      return true;
    }
  }

    // Get a random id
    getRandomId(): string {
      let text = 'M';
      const possible = 'ABCDEFGHJKLMPQRSTUVWXYZabcdefghjklmpqrstuvwxyz';
      const chiffre = '0123456789';
      for (let i = 0; i <= 5; i++) {
          text += chiffre.charAt(Math.floor(Math.random() * chiffre.length));
      }
      return text;
    }

      // Format phone number
  formatPhoneNumber(phoneNumberString: any, prefix: string) {
    let  phone = phoneNumberString;
    if (prefix === '237') {
       phone = ('' + phoneNumberString).replace(/\B(?=(\d{2})+(?!\d))/g, " ");
    } else if (prefix === '27') {
       phone = ('' + phoneNumberString).replace(/\B(?=(\d{2})+(?!\d))/g, " ");
       const codePhone: string[] = phone.split(' ');
       if (codePhone && codePhone.length > 2) {
          let phonePrex = codePhone[0] + codePhone[1] + codePhone[2];
          phonePrex = phonePrex.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          codePhone.splice(0,3);
          while(codePhone.length) {
            phonePrex += ' ' + codePhone.splice(0,1);
          }
          phone = phonePrex;
       } 
    }
    
    return phone;
  }

}

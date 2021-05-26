import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line: variable-name
  token: string;

  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService,
    private event: EventService
  ) {
    this.token = this.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // Get the current user session Language
  public getCurrentUserSessionLanguage() {
    return this.localStorage.getItem('user-session-language');
  }

  // Set the current user session Language
  public setCurrentUserSessionLanguage(lang: any) {
    this.localStorage.setItem('user-session-language', lang);
  }

  // Get the current user device
  public getUserDevice(): any {
    return this.localStorage.getItem('user-device');
  }

  // Set the current user device
  public setUserDevice(data: any) {
    this.localStorage.setItem('user-device',data);
  }

  // Get the current user registration Data
  public getRegistrationData(): any {
    return this.localStorage.getItemSecure('user-registration-data');
  }

  // Set the current user registration Data
  public setRegistrationData(userData: any) {
    this.localStorage.setItemSecure('user-registration-data', userData);
  }

  // Get the current user
  public getUserData(): any {
    return this.localStorage.getItemSecure('user-data');
  }

  // Set the current user
  public setUserData(userData: any) {
    this.localStorage.setItemSecure('user-data', userData);
  }

  // Get the current user payemnt method
  public getUserpaymentMethod(): any {
    return this.localStorage.getItem('user-payment-method');
  }

  // Get the current user payemnt method
  public setUserPaymentMethod(data: any) {
    this.localStorage.setItem('user-payment-method', data);
  }

  // Get the  user token
  public getUserToken(): any {
    return  this.localStorage.getItem('user-token');
  }

  // Get the  user token
  public setUserToken(token: any) {
    this.localStorage.setItem('user-token', token);
  }

  // Get the  user role
  public getUserRole(): any {
    return this.localStorage.getItem('user-role');
  }

  // Get the  user role
  public setUserRole(role: any) {
    this.localStorage.setItem('user-role', role);
  }

  // Get the  user badge
  public getUserBadge(): any {
    return this.localStorage.getItem('user-badge');
  }

  // Get the  user badge
  public setUserBadge(badge: any) {
    this.localStorage.setItem('user-badge', badge);
  }

  // Get the  user credentials
  public getUserSecret(): any {
    return this.localStorage.getItemSecure('user-credentials');
  }

  // Set the  user credentials
  public setUserSecret(credentials: any) {
    this.localStorage.setItemSecure('user-credentials', credentials);
  }

  // update the user language
  updateUserLang(user: any) {
    this.token = this.getUserToken();
    return this.api.post('user/update/langue/user/' + this.token, user);
  }

  // Get the grade level of the user
  getGradeLevelUser() {
    this.token = this.getUserToken();
    return this.api.get('user/school/v1/gradelevel/' + this.token);
  }

  // Add a grade level of a user
  addGradeLevelUser(grade: any) {
    this.token = this.getUserToken();
    return this.api.post('user/school/v1/gradelevel/' + this.token, grade);
  }

  // Update the grade level of the user
  updateGradeLevelUser(grade: any) {
    this.token = this.getUserToken();
    return this.api.put('user/school/v1/gradelevel/' + this.token, grade);
  }

  // Get the user travel
  getTravellingUser() {
    this.token = this.getUserToken();
    return this.api.get('user/trip/v1/travel/' + this.token);
  }

  // add a travael to the user
  addTravellingUser(grade: any) {
    this.token = this.getUserToken();
    return this.api.post('user/trip/v1/trip/' + this.token, grade);
  }

  // Update the travel of the user
  updateTravellingUser(grade: any) {
    this.token = this.getUserToken();
    return this.api.put('user/trip/v1/trip/' + this.token, grade);
  }

  // Get the user experience
  getExperienceUser() {
    this.token = this.getUserToken();
    return this.api.get('user/experience/v1/experience/' + this.token);
  }

  // Add an experience with the user
  addExperienceUser(experience) {
    this.token = this.getUserToken();
    return this.api.post('user/experience/v1/experience/' + this.token, experience);
  }

  // Update the user experience
  updateExperienceUser(experience: any) {
    this.token = this.getUserToken();
    return this.api.put('user/experience/v1/experience/' + this.token, experience);
  }

  // Get the user informations
  getProfileUser() {
    this.token = this.getUserToken();
    return this.api.get('user/account/v1/profile/' + this.token);
  }

  // Get the user informations
  getProfileUserId(userId: any) {
    return this.api.get('/bid/v1/getProfile/' + userId);
  }

  // Update the user informations
  updateProfileUser(profile: any) {
    this.token = this.getUserToken();
    return this.api.put('user/account/v1/profile/' + this.token, profile);
  }

  // Send email to update user password
  sendEmailOrPassword(emailOrPhone: any) {
    return this.api.post('user/account/v1/code/password', emailOrPhone);
  }

  // Send the code validation
  sendCodeValidationForChangePassword(code: any) {
    return this.api.post('user/account/v1/confirmcode/password', code);
  }

  // Change the user password
  changeMyPassword(user: any) {
    return this.api.post('user/account/v1/changepassword', user);
  }

  // Get all user user payment method
  getAllMethodPaymentUser() {
    return this.api.get('user/payment/v1/methodpayment/' + this.token);
  }

  // Add the user payment metohod
  addMethodPaymentUser(methodPayment: any) {
    this.token = this.getUserToken();
    return this.api.post('user/payment/v1/methodpayment/' + this.token, methodPayment);
  }

  // Update user payment method
  updateMethodPaymentUser(methodPayment: any) {
    this.token = this.getUserToken();
    return this.api.put('user/payment/v1/methodpayment/' + this.token, methodPayment);
  }

  // get the type of paiement method
  getAllMethodPaymentType() {
    return this.api.get('payment/v1/typepayment');
  }

  // get the type of paiement method by country
  getAllMethodPaymentTypeByCountry(countryId: number) {
    return this.api.get('payment/v2/typepayment/' + countryId);
  }

  // Pay a tontine automatically
  payTontineAutomatically(tontines: any) {
    this.token = this.getUserToken();
    return this.api.post('automatic/payment/v1/from/wallet/' + this.token, tontines);
  }

  // Update the user pin 
  updateUserPin(data: any) {
    this.token = this.getUserToken();
    return this.api.post('user/change/pin/' + this.token, data);
  }

  // Send the device information for push notification
  sendDeviceData(data: any) {
    return this.api.post('onesignal/v1/add/identifier', data);
  }

  // Save the user device id for push notification
  saveUserDeviceData(data: any) {
    this.token = this.getUserToken();
    return this.api.post('onesignal/v1/update/device/' + this.token, data);
  }

  // request news letter
  requestNews(data: any) {
    return this.api.post('newsletter/get/infos', data);
  }

  // Update the user picture
  updatePicture(data: any) {
    this.token = this.getUserToken();
    return this.api.post('user/update/profile/' + this.token, data);
  }

  // Save the user device Id  daily
  saveDevice(params: any) {
    const param = this.localStorage.getItem('day-token');
    const date = param ? new Date(JSON.parse(param)) : null;
    const currentDate = new Date();
    if (!date || date && (date.getFullYear() !== currentDate.getFullYear()
      || date.getMonth() !== currentDate.getMonth()
      || date.getDate() !== currentDate.getDate())) {
      this.saveUserDeviceData(params).subscribe((ans: any) => {
        if (ans && ans.message === 'success') {
          this.setUserDevice(ans.result);
          const currentDate = new Date();
          this.localStorage.setItem('day-token', currentDate);
        }
      }, error => { });
    }
  }


}

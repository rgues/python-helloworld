import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiService
  ) { }

  // Send feedbaks to administration
  saveFeedbacks(feedbacks: any) {
    return this.api.post('user/feedback/v1/submit', feedbacks);
  }

  // Get all the feedbacks
  getFeedbacks() {
    return this.api.get('user/feedback/v1/getAll');
  }

  // Send contact to administration
  sendContact(contact: any) {
    return this.api.post('contact/v1/save', contact);
  }

  // Send email infos for newsletters to TOUPESU
  sendEmailForNewsLetter(infos: any) {
    return this.api.post('newsletter/get/infos', infos);
  }
}

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { EventService } from 'src/app/shared/service/events.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { UserService } from '../../user/service/user.service';

export interface TontineEvent {
  id: number;
  name: string;
  description: string;
  country: string;
  currency: string;
  imgUrl: string;
  startOn: string;
  endOn: string;
  budget: number;
  visibility: string;
  status: string;
  contribution: number;
  members?: EventMember[];
}

export interface EventMember {
  id: number;
  name: string;
  tel: string;
  email: string;
  isAnonym: boolean;
  gift: number;
}

@Injectable({
  providedIn: 'root'
})
export class TontinesEventsService {
  typeTontineName: string;
  private subject = new Subject<any>();
  token: string;

  constructor(
    public api: ApiService,
    private userService: UserService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.typeTontineName = '';
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }


  sendMessageInvitation(message: any) {
    this.subject.next({ isInvitation: message });
  }

  getMessageInvitationEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  // Get the current user
  getCurrentTontineEventData(): any {
    return this.localStorage.getItem('tontine-data-event');
  }

  // Get the current user
  setCurrentTontineEventData(tontineEventData: any) {
    this.localStorage.setItem('tontine-data-event', tontineEventData);
  }

  // Create the tontine
  createTontineEventPost(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/create/' + this.token, JSON.stringify(tontine));
  }

  // Edit the tontine
  editTontineEventPost(tontine) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/edit/' + this.token, tontine);
  }

  // Get the user tontine default
  getMyTontineEventDefault() {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine_event/v1/user/all_by_default/' + this.token);
  }

  // Get the user tontine
  getMyTontineEvent(idCountry: any) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine_event/v1/user/all/' + this.token + '/' + idCountry);
  }

  // Get all tontine events for a country
  getAllTontineEvent(idCountry: any) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine_event/v1/all/' + this.token + '/' + idCountry);
  }

  // Get all tontine events for a country
  getAllCountriesTontineEvent() {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine_event/v1/all_events/' + this.token);
  }


  // Get the  tontine information
  getTontineDetail(tontineId: number) {
    return this.api.get('tontine_event/v1/detail/' + tontineId);
  }

  // Get the  tontine information
  deleteTontine(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/delete/' + this.token, tontineId);
  }

  // Send the tontine invitation
  sendInvitation(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/invitation/participants/' + this.token, invitation);
  }


  // Get the tontine invitation code
  resendInvitationEvent(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/invitation/resendCode/' + this.token, invitation);
  }

  // send a notification message to TOUPESU TEAM
  sendNotification(notification: any) {
    return this.api.post('tontine_event/v1/send/notification', notification);
  }

  getMessagingEvent(tontineId: number) {
    this.token = this.userService.getUserToken();
    return this.api.get('tontine_event/v1/get/notifications/' + tontineId + '/' +
      this.token);
  }

  // Get all events for invitations
  getAllEventsForInvitations() {
    this.token = this.userService.getUserToken();
    return this.api.get(`tontine_event/v1/events/for/invitation/${this.token}`);
  }

  // ========================== Manage User Invitation ========================================= //

  // Get all invitations
  getAllEventsInvitations(eventId: any) {
    this.token = this.userService.getUserToken();
    return this.api.get(`tontine_event/v1/invitation/participants/all/${this.token}/${eventId}`);
  }


  // Get all userss events invitations 
  getAllEventsInvitation() {
    this.token = this.userService.getUserToken();
    return this.api.get(`tontine_event/v1/my/invitation/member/all/${this.token}`);
  }

  // Accept the request event invitation by admin
  declineEventInvitationAdmin(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/invitation/admin_event/refuseJoin/' + this.token, invitation);
  }

  // Decline the request event invitation by admin
  AcceptEventInvitationAdmin(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/invitation/admin_event/acceptJoin/' + this.token, invitation);
  }

  // Decline admin invitation by user
  declineEventInvitation(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine_event/v1/invitation/participant/refuseJoinEvent/' + this.token, invitation);
  }

  // Join an event by a user
  acceptInvitationEvent(invitation: any) {
    return this.api.post('tontine_event/v1/invitation/participant/acceptJoinEvent', invitation);
  }

  // Accept the admin  invitation to join an event with token 
  acceptInvitationEventWithToken(invitation: any) {
    const token = this.userService.getUserToken();
    return this.api.post(`tontine_event/v1/invitation/participant/acceptJoinEventToken/${token}`, invitation);
  }
  
}

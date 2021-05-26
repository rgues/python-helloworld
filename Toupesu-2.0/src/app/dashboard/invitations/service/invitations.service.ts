import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { UserService } from '../../user/service/user.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { EventService } from 'src/app/shared/service/events.service';

@Injectable({
  providedIn: 'root'
})
export class InvitationsService {
  token: string;

  constructor(
    private api: ApiService,
    private userService: UserService,
    private event: EventService,
    private localStorage: LocalStorageService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // send the debts Data
  sendData(data) {
    this.localStorage.setItem('invitation-data', data);
  }

  // Get the debts Data
  getData() {
    return this.localStorage.getItem('invitation-data');
  }


  /*===== Routes for invitations ========*/

  // Send the tontine invitation by an admin
  sendInvitationTontine(invitation: any, userId: number) {
    return this.api.post('tontine/v1/invitation/members/' + userId, invitation);
  }

  // Accept the admin  invitation to join the tontine
  acceptInvitationTontine(invitation: any) {
    return this.api.post('tontine/v1/invitation/member/acceptJoinTontine', invitation);
  }

  // Accept the admin  invitation to join the tontine with token 
  acceptInvitationTontineWithToken(invitation: any) {
    const token = this.userService.getUserToken();
    return this.api.post(`tontine/v1/invitation/member/acceptJoinTontineToken/${token}`, invitation);
  }

  // cancel the admin invitation
  cancelInvitation(invitation: any) {
    return this.api.post('tontine/v1/invitation/member/refuseJoinTontine', invitation);
  }

  // cancel the admin invitation with token
  cancelInvitationWithToken(invitation: any) {
    const token = this.userService.getUserToken();
    return this.api.post(`tontine/v1/invitation/member/refuseJoinTontineToken/${token}`, invitation);
  }


  // Get the invitation with status pending
  getpendingInvitations(tontineId: any, adminId: any) {
    return this.api.get('tontine/v1/invitation/member/pending/' + tontineId + '/' + adminId);
  }

  // Get the invitations with status requested
  getRequestedInvitations(tontineId: any, adminId: any) {
    return this.api.get('tontine/v1/invitation/member/requested/' + tontineId + '/' + adminId);
  }

  // Get the list of invitations rejected by user
  getInvitationsRejectedbyUser(tontineId: any, adminId: any) {
    return this.api.get('tontine/v1/invitation/member/rejected/' + tontineId + '/' + adminId);
  }

  // cancel the guest invitation sent by a member
  cancelguestInvitation(userId: any, invitation: any) {
    return this.api.post('tontine/v1/invitation/admin_tontine/refuseJoin/' + userId, invitation);
  }

  // accept the guest invitation sent by a member
  acceptguestInvitation(userId: any, invitation: any) {
    return this.api.post('tontine/v1/invitation/admin_tontine/acceptJoin/' + userId, invitation);
  }

  // Get the tontine invitation code
  getInvitationCode(userId: any, invitation: any) {
    return this.api.post('tontine/v1/invitation/admin_tontine/resendCode/' + userId, invitation);
  }

  // Get all invitations
  getAllInvitation(tontineId: any, adminId: any) {
    return this.api.get(`tontine/v1/invitation/member/all/${tontineId}/${adminId}`);
  }

  // Delete the invitation
  deleteInvitation(invitation: any) {
    this.token = this.userService.getUserToken();
    return this.api.post('tontine/v1/invitation/remove/entry/' + this.token, invitation);
  }

  // Get the list of invitation send
  getInvitations() {
    this.token = this.userService.getUserToken();
    if (this.token) {
      return this.api.get('tontine/v1/my/invitation/member/all/' + this.token);
    }
  }

  /** ============ Invitations services end ============= */


}

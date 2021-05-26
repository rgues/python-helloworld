import { Injectable } from '@angular/core';
import { EventService } from 'src/app/shared/service/events.service';
import { ApiService } from '../../../shared/service/api.service';
import { UserService } from '../../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  token: string;

  constructor(
    private userService: UserService,
    public api: ApiService,
    private event: EventService
  ) {
    this.token = this.userService.getUserToken();
    this.event.subscribe('new-token', token => {
      this.token = token;
    });
  }

  // Get all user notifications with token
  getUserTokenNotifications() {
    this.token = this.userService.getUserToken();
    return this.api.get('notification/v1/getAllNotificationWithToken/' + this.token);
  }

  // Get all user notifications with token
  getUserIdNotifications(userId: number) {
    return this.api.get('notification/v1/getAllNotificationWithUserId/' + userId);
  }

  // Update the field read notification
  readNotifications(notification: any) {
    return this.api.post('notification/v1/updatedFieldLu', notification);
  }

  // Delete the field read notification
  deleteNotifications(notification: any) {
      return this.api.post('notification/v1/delete', notification);
  }

  // Get the tontine notifications
  getTontinesNotifications(tontineId: number) {
      return this.api.get('notification/v1/getAllNotificationTontine/' + tontineId);
  }
}

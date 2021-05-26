import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/shared/service/ui.service';

@Injectable({
  providedIn: 'root'
})
export class EventErrorService {

  constructor(
    private translate: TranslateService,
    private ui: UiService
  ) { }

  manageEventError(error: any) {

    if (error && error.error && error.error.tontine_event_already_exist) { 
      this.translate.get('TONTINE_EVENT_ALREADY_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.tontine_event_not_found) {
      this.translate.get('TONTINE_EVENT_DELETE_ERROR1').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.tontine_event_already_exist) {
      this.translate.get('M_TONTINE_EVENT_ALREADY_EXIST').subscribe(trans => {
        this.ui.presentToast(trans);
      });
    }

    if (error && error.error && error.error.date_error) {
      this.translate.get('M_TONTINE_EVENT_DATE_ERROR').subscribe(trans => {
        this.ui.presentToast(trans); 
      });
    }

  }
}

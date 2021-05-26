import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/service/local-storage.service';
import { UiService } from '../shared/service/ui.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  canDisable:string;

  constructor(
    private auth: AuthService,
    private ui: UiService,
    private localStorage: LocalStorageService
  ) { 
    this.canDisable =  this.localStorage.getItem('maintenance');
    this.ui.hardwareBackButton();
  }

  ngOnInit() {
    this.auth.getVersion().then((ans: any) => {
      this.canDisable = ans;
    });
  }

}

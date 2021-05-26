import { Injectable } from '@angular/core';
import { ApiService } from '../shared/service/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGlobalDataService {
  // tslint:disable-next-line: variable-name
  public baseUrl: string;
  token: string;

  constructor(
    private api: ApiService
  ) {
    this.baseUrl = this.api.baseUrl;
  }


}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string;
  isLoadingShow = false;
  public static timeOut: number;

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
      this.baseUrl =      'https://api.toupesu.com/' ;  //  'https://dev.toupesu.com/toupesu_v2_0/'; //
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/i18n/en.json');
  }



  get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }

  post(path: string, body: any, options?: any): Observable<any> {
    return this.http.post(this.baseUrl + path, body, options);
  }

  put(path: string, body: any, options?: any): Observable<any> {
    return this.http.put(this.baseUrl + path, body, options);
  }

  delete(path: string, options?: any): Observable<any> {
    return this.http.delete(this.baseUrl + path, options);
  }

  patch(path: string, body: any, options?: any): any {
    return this.http.patch(this.baseUrl + path, body, options);
  }

  head(path: string, options?: any): Observable<any> {
    return this.http.head(this.baseUrl + path, options);
  }

  jsonp(path: string, callbackParam?: string): Observable<any> {
    return this.http.jsonp(this.baseUrl + path, callbackParam);
  }

}

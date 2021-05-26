import { Injectable } from '@angular/core';

const APP_PREFIX = 'TOUPESU-V1-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    const data =  localStorage.getItem(`${APP_PREFIX}${key}`);
    return data  ? JSON.parse(data) : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  // get item secure
  getItemSecure(key: string): any {
    const data = localStorage.getItem(`${APP_PREFIX}${key}`);
    return data && atob(data) ? JSON.parse(atob(data)) : null;
  }

  // Set item secure
  setItemSecure(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, btoa(JSON.stringify(value)));
  }

}

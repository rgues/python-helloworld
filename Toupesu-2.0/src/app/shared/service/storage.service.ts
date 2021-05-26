import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageData {

  constructor(
    private storage: Storage
  ) { }

 async set(key: string, value: any) {
  await this.storage.set(key, value);
  }

  async get(key: string) {
   return await this.storage.get(key);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

}

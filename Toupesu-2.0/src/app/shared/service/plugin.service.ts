import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class PluginService {
  shareData: any;
  constructor(
    private camera: Camera,
    private socialSharing: SocialSharing,
    private onesignal: OneSignal,
  ) {
    this.shareData = [];
  }

  // Get a picture
  getPicture() {
    return new Observable((subscriber) => {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        subscriber.next(base64Image);
      }, (err) => {
        subscriber.next(null);
      });

    });
  }

  // Take a picture
  takePicture() {
    return new Observable((subscriber) => {
      const options: CameraOptions = {
        quality: 50,
        cameraDirection: this.camera.Direction.FRONT,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA
      }
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        subscriber.next(base64Image);
      }, (err) => {
        subscriber.next(err);
      });
    });
  }


  // share fucntion
  share(message: string, title: string, link: string) {
    this.socialSharing.share(message, title, '', link).then(() => {
    }).catch(() => {
    });
  }


   // Get the user Id
   getIds() {
    return new Observable((subscriber) => {
    this.onesignal.getIds().then(ids => {
      if (ids && ids.userId) {
        subscriber.next(ids.userId);
      } else {
        subscriber.next(null);
      }
    });
  });
  }



}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compteurFormat'
})
export class CounterFormatPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return  0+"J "+0+"H:"+0+"m:"+0+"s";
    }
    return Math.floor(parseInt(value)/86400)+"J "+Math.floor((parseInt(value)%86400)/3600)+"H:"+Math.floor(((parseInt(value)%86400)%3600)/60)+"m:"+(((parseInt(value)%86400)%3600)%60)+"s";
  }

}

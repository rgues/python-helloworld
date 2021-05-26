import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTruncate'
})
export class StringTruncatePipe implements PipeTransform {

  transform(value: any, param: number): any {
    if (value) {
      const currentString = String(value);
      return currentString &&  currentString.length  <  param ? currentString : currentString.substring(0,param) + '...';
    } else {
      return '';
    }
  }

}

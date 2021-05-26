import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaDumper'
})
export class CommaDumperPipe implements PipeTransform {

    transform(value: any): any {
        if (value) {
          const currentParam = String(value);
          return currentParam.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return '0';
    }

}

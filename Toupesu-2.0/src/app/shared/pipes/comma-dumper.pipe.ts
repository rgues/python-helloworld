import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commadumper'
})
export class CommaDumperPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
       return '0';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

}

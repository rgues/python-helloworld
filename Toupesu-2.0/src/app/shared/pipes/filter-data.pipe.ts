import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterDataPipe implements PipeTransform {

  transform(items: any[], value: string, label:any): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];

    if (label=="title") {
       return items.filter((e:any) => e.title.toLowerCase().indexOf(value) > -1 );
    }

    if (label=="NAMES") {
       return items.filter((e:any) => e.NAMES.toLowerCase().indexOf(value) > -1 );
    }
  } 
}

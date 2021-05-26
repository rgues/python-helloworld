import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removecurrency'
})
export class RemoveCurrencyPipe implements PipeTransform {

  transform(items: any[], value: string): any {
    let itemsList = [];
    if (!value) {
       return items;
    } 
     
    itemsList = items.filter(data => { return data.currency_name !== value });

    return itemsList;
}

}

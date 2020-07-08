import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './models/gsheet-tab.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Entry[], searchText: string): any[] {
    if (!items) {
      return []
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((obj:Entry) => {
      return obj.gsx$stateut.$t.toLowerCase().includes(searchText);
    });
  }

}

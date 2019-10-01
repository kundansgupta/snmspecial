import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : any): any[] {

      if (!items) return [];
      return items.filter(it => it[field.field] === field.value);
    }
}

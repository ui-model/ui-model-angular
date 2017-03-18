import {Pipe, PipeTransform} from '@angular/core';
import {isEmpty} from 'ui-model';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any): boolean {
    return isEmpty(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addcomma'
})
export class AddcommaPipe implements PipeTransform {

  transform(value: number[]): string {
    if (!value || value.length === 0) {
      return '';
    }
    return value.join(', ');
  }

}

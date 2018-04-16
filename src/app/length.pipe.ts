import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: any, maxLength: number): any {
    return value.length > maxLength ? value.substring(0, maxLength) + "..." : value;
  }

}

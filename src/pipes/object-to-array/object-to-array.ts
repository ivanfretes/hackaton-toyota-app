import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'objectToArrayPipe',
})
export class ObjectToArrayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(objects : any = []) {
    //return Object.values(objects);
  }
}

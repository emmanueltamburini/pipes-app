import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sell.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public sortHeroe(a: Heroe, b: Heroe): number {
    return (a.name > b.name) ? 1 : -1;
  }

  transform(heroes: Heroe[]): Heroe[] {
    return heroes.sort(this.sortHeroe);
  }

}

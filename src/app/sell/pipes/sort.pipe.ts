import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sell.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  public sortHeroeByName(a: Heroe, b: Heroe): number {
    return (a.name > b.name) ? 1 : -1;
  }

  public sortHeroeByFly(a: Heroe, b: Heroe): number {
    return (a.fly > b.fly) ? 1 : -1;
  }

  public sortHeroeByColor(a: Heroe, b: Heroe): number {
    return (a.color > b.color) ? 1 : -1;
  }

  public sortHeroeByNameReverse(a: Heroe, b: Heroe): number {
    return (a.name > b.name) ? -1 : 1;
  }

  public sortHeroeByFlyReverse(a: Heroe, b: Heroe): number {
    return (a.fly > b.fly) ? -1 : 1;
  }

  public sortHeroeByColorReverse(a: Heroe, b: Heroe): number {
    return (a.color > b.color) ? -1 : 1;
  }

  transform(heroes: Heroe[], sortBy?: string, orderBy: boolean = true): Heroe[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort(orderBy ? this.sortHeroeByName : this.sortHeroeByNameReverse);

      case 'fly':
        return heroes.sort(orderBy ? this.sortHeroeByFly : this.sortHeroeByFlyReverse);

      case 'color':
        return heroes.sort(orderBy ? this.sortHeroeByColor : this.sortHeroeByColorReverse);

      default:
        return heroes;
      }
  }

}

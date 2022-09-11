import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sell.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {
  public value: string = 'Example';
  public booleanValue: boolean = false;
  public sortBy: string = '';
  public orderBy: boolean = true;
  public heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green lantern',
      fly: true,
      color: Color.green
    },
  ];

  public changeSortBy(value: string): void {
    if (this.sortBy === value) {
      this.orderBy = !this.orderBy;
    } else {
      this.orderBy = true;
    }
    this.sortBy = value;
  }

  public changeBoolean(): void {
    this.booleanValue = !this.booleanValue;
  }
}

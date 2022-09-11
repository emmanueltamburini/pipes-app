import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {
  public value: string = 'Example';
  public booleanValue: boolean = false;

  public changeBoolean(): void {
    this.booleanValue = !this.booleanValue;
  }
}

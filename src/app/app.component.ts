import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = 'Emmanuel';
  public value: number = 1000;
  public object: object = {
    name: 'Emmanuel'
  }

  showName(): void {
    console.log(this.name);
    console.log(this.value);
    console.log(this.object);
  }
}

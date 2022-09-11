import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {
  public name: string = 'Emmanuel';
  public gender: string = 'male'

  public mapPronouns: { [key: string]: string } = {
    'female': 'she',
    'male': 'he'
  }

}

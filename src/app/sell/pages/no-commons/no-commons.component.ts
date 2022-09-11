import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {
  // i18nSelect
  public name: string = 'Emmanuel';
  public gender: string = 'male'

  public mapPronouns: { [key: string]: string } = {
    'female': 'she',
    'male': 'he'
  }

    // i18nPlural
    public clients: string [] = ['Ana', 'Pedro', 'Diana'];
    public clientMap: { [key: string]: string } = {
      '=0': 'we do not have any client waiting',
      '=1': 'we have a client waitng',
      'other': 'we have # clients waiting'
    }

}

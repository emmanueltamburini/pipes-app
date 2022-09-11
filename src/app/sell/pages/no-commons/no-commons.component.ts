import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {
  // i18nSelect
  public name: string = 'Emmanuel';
  public gender: string = 'male';

  public mapPronouns: { [key: string]: string } = {
    'female': 'she',
    'male': 'he'
  };

  public changePerson(): void {
    if (this.gender === 'male') {
      this.name = 'Ana';
      this.gender = 'female';
    } else {
      this.name = 'Emmanuel';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string [] = ['Ana', 'Pedro', 'Diana', 'Juan', 'Doris'];

  public clientMap: { [key: string]: string } = {
    '=0': 'we do not have any client waiting',
    '=1': 'we have a client waitng',
    'other': 'we have # clients waiting'
  };

  public deleteClient(): void {
    this.clients.splice(0,1);
  }

  // Key value pipe
  public person: object = {
    name: 'Emmanuel',
    age: 35,
    address: 'Mérida, Venezuela'
  };

  // Json pipe
  public heroes: object [] = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ];

}

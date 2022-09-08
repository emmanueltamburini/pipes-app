import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  public nameLower: string = 'emmanuel';
  public nameUpper: string = 'EMMANUEL';
  public nameFull: string = 'EmmAnUEl tAmbuRINi';

  public date: Date = new Date();
}

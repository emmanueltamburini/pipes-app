import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Date and text',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/number'
          },
          {
            label: 'No commons',
            icon: 'pi pi-globe',
            routerLink: '/no-commons'
          }
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: '/sort'
      }
    ];
  }

}

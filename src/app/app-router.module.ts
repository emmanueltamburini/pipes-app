import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sell/pages/basics/basics.component';
import { NoCommonsComponent } from './sell/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sell/pages/numbers/numbers.component';
import { SortComponent } from './sell/pages/sort/sort.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'number',
    component: NumbersComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

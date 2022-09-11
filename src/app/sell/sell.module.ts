import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { UpperCasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,
    UpperCasePipe,
    FlyPipe
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SellModule { }

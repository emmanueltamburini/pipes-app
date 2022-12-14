import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SellModule } from './sell/sell.module';

import { SharedModule } from './shared/shared.module';

// change app locale

import localeEs from '@angular/common/locales/es-VE';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SellModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-VE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

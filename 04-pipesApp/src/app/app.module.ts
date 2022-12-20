import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { NumericModule } from './numeric/numeric.module';


import { AppComponent } from './app.component';
//Cambiar el locale de la app
import localEs from '@angular/common/locales/es-419'
import {registerLocaleData} from '@angular/common'

import localFr from '@angular/common/locales/fr'
registerLocaleData(localFr);
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    NumericModule
    
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-419'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

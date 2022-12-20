import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    //Components
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent,
    //Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent
    
  ],

  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class NumericModule { }

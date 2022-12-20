import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ComunesComponent } from './numeric/pages/comunes/comunes.component';
import { NumerosComponent } from './numeric/pages/numeros/numeros.component';
import { NoComunesComponent } from './numeric/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './numeric/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: ComunesComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent,
    
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

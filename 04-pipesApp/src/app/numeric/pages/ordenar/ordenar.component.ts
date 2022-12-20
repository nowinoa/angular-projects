import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/numeric.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {

  mayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [{
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: true,
    color: Color.verde
  },
  {
    nombre: 'Linterna Verde',
    vuela: true,
    color: Color.verde
  }

]
   constructor() { }

  ngOnInit(): void {
  }

 cambiarM() {
  this.mayusculas = !this.mayusculas;
 }
 cambiarOrden(valor: string) {
  this.ordenarPor = valor;
 }
  
  }


import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = 'Fernando';
  valor: number = 1000;
  obj = {
  nombre: 'Fernando HerrerA'
  }
constructor(private primeNgConfig: PrimeNGConfig) {
  
}
ngOnInit() {
  this.primeNgConfig.ripple = true; 
  
}

  mostrarNombre() {
    console.log(this.nombre)
  }

}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'

  
})
export class NoComunesComponent  {
// 18nSelect
nombre: string[] = ['Sara', 'Fernando', 'Matias']
genero: string[] = ['masculino', 'femenino'];
invitacionMapa = {
  'masculino':'invitarlo',
  'femenino': 'invitarla'
}

//i18nPlural
clientes: string[] = ['María', 'Fernando', 'Rocío', 'Javier', 'Úrsula', 'Topacio', 'PeazoTopo'];

clientesMapa = {
  '=0': 'No hay nadie esperando',
   '=1':'Tenemos un cliente',
   'other': 'Tenemos # clientes'
}
cambiarCliente() {
  this.nombre = ['Melisa'];
  this.genero = ['femenino'];
}
borrarCliente() {
  this.clientes.shift()
}

// KeyValue Pipe
persona = {
  nombre: 'Fernando',
  edad: 32,
  direccion: 'Otawa, Canada'
}
// JSON Pipe
heroes= [
{nombre: 'Superman',
vuela: true
},

{
  nombre:'Hulk',
  vuela: false
},

{
  nombre:'Aquaman',
  vuela: false
}


];
// Async Pipe
miObservable = interval(1000); //0,1,2,3,4,5,6,7...
valorPromesa = new Promise( (resolve, reject) =>
{ 
  setTimeout(()=> {
    resolve('Tenemos data de promesa');
  },4000);
})

}
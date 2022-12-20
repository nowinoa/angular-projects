import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html'
 
})
export class ComunesComponent  {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'fErnandO';

  fecha: Date = new Date(); //Día de hoy
  

 

}

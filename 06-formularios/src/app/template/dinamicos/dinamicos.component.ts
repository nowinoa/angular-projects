import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favoritos[]
}

interface Favoritos {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Ainhoa',
    favoritos: [
      {
        id: 1, nombre: 'Elden Ring'
      },
      {
        id: 2, nombre: 'Call of Duty MW2  '
      }
    ]
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Formulario posteado')
  }
  nombreValido() {
    return this.miFormulario?.form.controls['nombre']?.invalid && 
            this.miFormulario?.form.controls['nombre']?.touched
  }

  

}

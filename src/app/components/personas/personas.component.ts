import { Component } from "@angular/core";
import { Persona } from "src/app/clases/persona.model";

@Component({
  selector:'Personas',
  templateUrl:'./personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent{
  titulo = 'Listado de Personas'
  personas:Persona [] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Suarez')
  ];

  inputNombre = '';
  inputApellido = '';

  agregarPersona(){
    this.personas.push(new Persona(this.inputNombre, this.inputApellido));
  }
}

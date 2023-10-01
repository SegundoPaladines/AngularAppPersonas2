import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "../clases/persona.model";
import { LoggingService } from './logging.service';

@Injectable() /* indica que este servicio recibe otro servicio */
export class PersonasService{

  personas:Persona [] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Suarez')
  ];

  constructor(
    private loggingService:LoggingService
  ){}

  /* Agregar personas */
  agregarPersona(persona: Persona){
    this.loggingService.enviaMensaje("Agregandop Persona "+persona.nombre);
    this.personas.push(persona);
  }

  /* que este proveedor de servicios emita eventos */
  saludar = new EventEmitter<string>();
}

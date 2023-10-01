import { Persona } from "../clases/persona.model";
export class PersonasService{

  personas:Persona [] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Suarez')
  ];

  /* Agregar personas */
  agregarPersona(persona: Persona){
    this.personas.push(persona);
  }
}

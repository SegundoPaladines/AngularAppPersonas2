import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/clases/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: Persona;
  @Input() contador: number;

  constructor(
    private personasService:PersonasService
  ){}

  emitirSaludo(){
    this.personasService.saludar.emit(this.persona.nombre+" dice Hola");
  }
}

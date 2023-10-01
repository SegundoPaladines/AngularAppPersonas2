import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/clases/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  /* declaracion del output con el event emiter que permite usar la funcion emit() para enviar la info*/
  /* personaCreada se convierte en un evento escuchable por otros componentes*/

  @Output() personaCreada = new EventEmitter<Persona>();

  /* como la referencia se hace al input entero se debe recibir como HTMLInputElement*/

  agregarPersona(nombre: HTMLInputElement, apellido:HTMLInputElement){
    /* para obtener el valor del input se usa el .value */
    /* enviar la persona al componente que contenga este componente*/
    this.personaCreada.emit(new Persona(nombre.value, apellido.value));
  }
}

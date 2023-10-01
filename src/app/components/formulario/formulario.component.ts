import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona.model';
import { LoggingService } from '../../services/logging.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  /* declaracion del output con el event emiter que permite usar la funcion emit() para enviar la info*/
  /* personaCreada se convierte en un evento escuchable por otros componentes*/

  @Output() personaCreada = new EventEmitter<Persona>();

  /* Con viewChild */

  @ViewChild('inputNombre') nombre: ElementRef;
  @ViewChild('inputApellido') apellido: ElementRef;

  //necesitamos el constructor para inyectar el servicio
  constructor(
    private loggingService:LoggingService,
    private personasService:PersonasService
  ){}

  ngOnInit(){}

  /* UTILIZANDO SERVICIOS y view child*/

  agregarPersona(){
    let persona = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.loggingService.enviaMensaje("Agregando Persona: " + persona.nombre + " "+persona.apellido);
    this.personasService.agregarPersona(persona);
  }

  /* con view child
    agregarPersona(){
        enviar la persona al componente que contenga este componente
        como se usa viewchild se debe usar el .nativeElement que devuelve el elemto HTML
        let persona = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
        this.loggingService.enviaMensaje("Enviando Persona " + persona.nombre + " "+persona.apellido);

        this.personaCreada.emit(persona);
      }
  /*

  /*
    CON LOCAL REFERENCE
    como la referencia se hace al input entero se debe recibir como HTMLInputElement
    agregarPersona(nombre: HTMLInputElement, apellido:HTMLInputElement){
      para obtener el valor del input se usa el .value
      enviar la persona al componente que contenga este componente
      this.personaCreada.emit(new Persona(nombre.value, apellido.value));
    }
  */
}

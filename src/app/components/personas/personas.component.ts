import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/clases/persona.model";
import { PersonasService } from "src/app/services/personas.service";

@Component({
  selector:'Personas',
  templateUrl:'./personas.component.html',
  styleUrls: ['./personas.component.css']
})

//Necesitamos usar el ngOnInit <- por eso el implemente OnInit
export class PersonasComponent implements OnInit{

  titulo = 'Listado de Personas'
  personas:Persona [] = [];

  //utilizar el servicios
  constructor(
    private personasService: PersonasService
  ){
    /* recibimos el evento emitido por el servicio */
    this.personasService.saludar.subscribe(
      (mensaje:string) => alert(mensaje)
    );
  }

  //para poder cargar el vector del proveedor de serivios cuando se inicialice la clase
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  /* el emiter está definido con objetos de tipo persona*/
 /*
   como se hace mediante servicios, este metodo ya no es necesario
    agregarPersona(persona: Persona){
      this.loggingService.enviaMensaje("Agregando persona al array..");
      this.personasService.agregarPersona(persona)
    }
  */
}

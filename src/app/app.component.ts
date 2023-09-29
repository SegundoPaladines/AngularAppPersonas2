import { Component } from '@angular/core';
/* Importante, nos permite usar lo de two-way banding que es lo de los eventos con el [()]*/
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'App Personas';
}

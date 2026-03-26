import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {ListaComrpasComponent} from './lista-comrpas/lista-comrpas.component'

@Component({
  selector: 'app-root',
  imports: [ListaComrpasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}

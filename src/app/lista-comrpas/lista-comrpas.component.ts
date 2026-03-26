import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-lista-comrpas',
  imports: [FormsModule],
  templateUrl: './lista-comrpas.component.html',
  styleUrl: './lista-comrpas.component.scss'
})
export class ListaComrpasComponent {
  item: String = '';

  adicionarItem(){
    console.log("Item recebido: ", this.item );
    this.item = '';
  }
}

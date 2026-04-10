import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ItemLista} from './itemlista';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-lista-comrpas',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-comrpas.component.html',
  styleUrl: './lista-comrpas.component.scss'
})
export class ListaComrpasComponent {
  item: String = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);
    this.item = '';
  }
  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado
  }

  limparLista(){
    this.lista = [];
  }
}

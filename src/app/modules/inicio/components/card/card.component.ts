import { Component } from '@angular/core';
//importamos interfaz
import { Patines } from 'src/app/models/patines';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //propiedad publica (tipo array)
  public info:  Patines[];

  constructor(){
    this.info=  [
      {id:1, nombre: 'Patines 1', precio: 100,  imagen: 'https://picsum.photos/200/300'},
      {id:2, nombre: 'Patines 2', precio: 200,   imagen: 'https://picsum.photos/200/301'},
      {id:3, nombre: 'Patines 3', precio: 300,    imagen: 'https://picsum.photos/200/302'},
    ]
  }

}

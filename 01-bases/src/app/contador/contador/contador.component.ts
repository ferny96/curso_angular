import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>

    <button (click)="acumular(base);"> + {{base}}</button>

    <span>{{ numero }} </span>

    <button (click)="acumular(-base);"> - {{base}}</button>
    
    `
})
export class ContadorComponent{
    /*Para poder mostrar este title o titulo en el archivo app.component.html debo de hacer uso de
  {{titulo}} entr el h1, ejemplo:
  <h1> {{ titulo }} </h1> 
  tambien podemos especificar el nivel de acceso*/

  public titulo: string = 'Contador App';

  /*Creando propiedades*/
  numero: number = 10;
  base: number = 5;

  /*Creando metodos*/
  acumular( valor: number, ){
    this.numero += valor;
  }
}
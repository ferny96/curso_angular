import { Component } from '@angular/core';
import { color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
 
  ordenarPor: string = '';
  
  /*Arreglo de heroes*/
  heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: color.verde
    }
  ]

  cambiarLetra(){
    this.enMayusculas = !this.enMayusculas;
  }

  /*NOTA: cambiarOrden es un metodo de ordenarPor*/
  cambiarOrden(valores: string){
    this.ordenarPor = valores;
  }

}
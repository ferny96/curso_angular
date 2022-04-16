import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  /*Propiedades*/
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;


  /*Injectamos el servicio*/
  constructor( private paisService: PaisService){}
    
  /*Objeto para realizar la busqueda del pais*/
  buscar( termino: string){
    this.mostrarSugerencias = false;
    
    /*Aqui lo ponemos en false, porque al volver a realizar una busqueda el mensaje se quite*/
    this.hayError = false;

    /*NOTA: this.termino es igual termino que estoy recibiendo en buscar*/
    this.termino = termino;

    /*NOTA: En el subscribe podemos enviar dos argumentos, el next: es el siguiente valor que
    nosotros estamos usan y error: este nos muestra un error*/
    this.paisService.buscarPais(termino)
    .subscribe( paises => {
      console.log(paises);
      this.paises = paises
    })
  }

  /*Esta parte del codigo nos sirve para mostrar sugerencias al ir escribiendo en el buscador*/
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;

    /*NOTA: Mustra las sugerencias en pantalla una vez dejamos de escribir*/
    this.mostrarSugerencias = true;

    /*NOTA: Esta parte sugerencias*/
    this.paisService.buscarPais(termino)
    .subscribe(paises => {
      /*NOTA: Con splice() le decimos cuantas sugerencias queremos que nos imprima en pantalla*/
      if(this.paisesSugeridos = []){
      this.paisesSugeridos = paises.splice(0,5)
      }
    })
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }
}
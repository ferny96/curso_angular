import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  /*Vamos a buscar por capital*/
  /*Propiedades*/
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  /*Injectamos el servicio*/
  constructor( private paisService: PaisService){}
    
  /*Objeto para realizar la busqueda del pais*/
  buscar( termino: string){
    
    /*Aqui lo ponemos en false, porque al volver a realizar una busqueda el mensaje se quite*/
    this.hayError = false;

    /*NOTA: this.termino es igual termino que estoy recibiendo en buscar*/
    this.termino = termino;

    /*NOTA: En el subscribe podemos enviar dos argumentos, el next: es el siguiente valor que
    nosotros estamos usan y error: este nos muestra un error*/
    this.paisService.buscarCapital(termino)
    .subscribe( paises => {
      this.paises = paises
    })
  }

}

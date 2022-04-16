import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  /*Otro decorador interesante de Angular, el @ViewChild:
  NOTA: Dentro de los parentesis ponemos el elemento que queremos buscar,
  la busqueda puede ser por directivas, clases, en este caso lo haremos con
  la referencia buscar*/

  /*Para asegurarnos de que un, hacemos uso de ! */
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  /*De gifs.service.ts mando a llamar a buscarGifs*/
  constructor( private gifsService: GitsService){

  }

  /*Metodo para la busqueda
  Para obtener la informacion de la caja de texto sin hacer uso del ngModul,
  lo podemos hacer de la siguiente manera*/
  buscar(){
    /*Como podemos mantener la referencia de la caja de texto*/

    /*NOTA: Si luego de poner punto en nativeElement no me aparecen mas opciones
    es porque debo de importar <HTMLInputElement> en el ElementRef<HTMLInputElement>*/
    const valor = this.txtBuscar.nativeElement.value;

    /*Limitar guardar duplicados en el historial*/
    if(valor.trim().length === 0){
      return
    }
    
    /*Llamando al metodo BuscarGifs del service*/
    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}

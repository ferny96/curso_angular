import { Component } from '@angular/core';
import { GitsService } from 'src/app/gifs/services/gits.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  /*Obtener el historial e imprimirlo en el sidebar*/
  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GitsService) {}
  
  /*Esto nos muestra las imagenes al dar clic en las opciones del sidebar*/
  buscar( termino: string){
    this.gifsService.buscarGifs(termino);
  }

}

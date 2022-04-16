import { Component } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  /*Propiedad que retorna el resultado de la busqueda*/
  get resultados(){
    return this.gifsService.resultados;
  }

  /*NOTA: Aqui inyectamos el servicio, el cual nos mostrara en pantalla
  los resultados de la busqueda*/
  constructor(private gifsService: GitsService) {}

}

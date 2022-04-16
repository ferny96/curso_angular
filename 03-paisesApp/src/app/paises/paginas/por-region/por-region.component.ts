import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
  }
  `]
})
export class PorRegionComponent {

  /*Arreglo de regiones*/
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  MiRegion: Pais[] = [];

  /*NOTA: inyectamos el servicio para poderlo usar*/
  constructor( private regionService: PaisService){}

  /*NOTA:Esto nos rive para evaluar la condicion de la clase, es decir, si un boton esta
  seleccionado se debe de poner en color azul de lo contrario los demas NO*/
  getClaseCSS (region: string): string {

    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  
  }

  /*NOTA: Esto nos sirve para activar la region*/
  activarRegion (region: string){
    
    /*NOTA: Esta linea de codigo nos sirve para evitar el evento de que al seleccionar una
    region se muestren los paises y al dar clic de nuevo en esa misma region no se refresque*/
    if(region === this.regionActiva){
      return;
    }
    
    this.regionActiva = region;
    this.MiRegion = [];

    /*Aqui mandamos a llamar la region para que nos muestre los paises*/
    this.regionService.buscarRegion(region)
    .subscribe( region => {
      this.MiRegion = region
    })
  }

}

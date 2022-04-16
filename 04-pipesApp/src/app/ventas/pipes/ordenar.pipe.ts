import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  /*Pipe para ordenar por orden alfabetico a los superheroes.
  NOTA: Para hacer uso de parametros, ordenaePor es un parametro*/
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    
    switch(ordenarPor){
      
      case 'nombre':
        return heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        return heroes.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
        default:
          return heroes;
    }

    /*if(ordenarPor === 'sin valor'){
      //Retorna el arreglo tal como se encuentra
      return heroes;
    } else {
      //NOTA: El metodo sort() ordena los elementos de un arreglo y devuelve
      el arreglo ordenado
      heroes = heroes.sort((a,b) =>
      (a.nombre > b.nombre) ? 1 : -1 );
    }*/
    
    return heroes;
  }

}

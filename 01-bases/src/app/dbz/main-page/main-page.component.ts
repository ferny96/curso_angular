import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /*Metodo o funcion agregar
  NOTA: En el archivo main-page-component.html en donde llamamos a la funcion
  agregar() le ponemos dentro de los parentesis $event, ejemplo: agregar($event)
  aunque la forma correcta es la siguiente: formaCorrecta2, donde del HTML
  debemos de eliminar $event y de esta clase el event: any y event.preventDefault()
  y en DBZ.module.ts importamos FormsModule, y en el HTML cambiamos el submit por
  ngSubmit*/

  /*Movi nuevo y agregar() a agregar.component.ts*/

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  
  /*NOTA: Mediante el uso de get estoy obteniendo la informacion de dbz.service.ts
  get personaje():Personaje[]{
    return this.dbzService.personaje;
  }*/

  /*Esta funcion ya no le daremos uso
  agregarNuevoPersonaje(argumento: Personaje){
    this.personaje.push(argumento);
  }*/

  /*NOTA: esto es una injeccion de dependencias*/
  constructor(){

  }

}
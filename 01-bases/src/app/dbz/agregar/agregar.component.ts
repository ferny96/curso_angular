import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  /*Creando el Input*/
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0

  }

  constructor(private dbzService: DbzService){}

  /*Creando el Output
  NOTA: Siempre tenemos que definir un tipo: ejemplo <Personaje>*/
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
agregar(){
    // event.preventDefault();

    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    /*Depurar la aplicacion
    debugger;*/

    /*NOTA: emir nos sirve para emitir un EVENTO*/
    // this.onNuevoPersonaje.emit(this.nuevo);

    /*Comente esta parte porque haremos uso de otro decorador
    del output*/
    /*Agregar this.personajes.push()
    this.personaje.push(this.nuevo);*/

    this.dbzService.agregarPersonaje(this.nuevo);

    /*this.nuevo = {}*/
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}

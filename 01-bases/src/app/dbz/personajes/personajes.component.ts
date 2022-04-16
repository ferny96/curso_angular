import { Component } from '@angular/core';
// import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /*NOTA: Exportar del componente padre main-page-component al componente
  hijo personajes.component.ts*/
  //@Input() personaje: Personaje[] = [];

  get personaje() {
    return this.dbzService.personaje;
  }

  constructor(private dbzService: DbzService){
    
  }
}

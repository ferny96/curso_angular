import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  /*directiva *ngFor: esta se expresa en el html
  directiva *ngif: esta tambien se expresa en el html*/

  heroeBorrado: string = '';

  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Capital America', 'Viuda Negra'];

  borrarHeroe(){
    /*Para evitar que me envie error puedo hacer uso del operador or || y asignarle un
    string vacio asi: this.heroes.shift() || '' */
    this.heroeBorrado = this.heroes.shift() || '';

  }

}

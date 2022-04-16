import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
      /*Esto es para la sepacion de arriba y abajo de las tarjetas
      para que no queden pegadas*/
      mat-card {
        margin-top: 20px;
      }
    `
  ]
})
export class HeroeTarjetaComponent {

  @Input() heroe!: Heroe;

}

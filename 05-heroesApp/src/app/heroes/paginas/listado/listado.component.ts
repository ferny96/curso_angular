import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  /*Propiedades*/
  heroes: Heroe[] = [];

  /*inyectando el servicio*/
  constructor( private heroesService: HeroesService) { }

  /*NOTA: Aqui en el ngOnInit llamamos a nuestro metodo gerHeroes del heroesService*/
  ngOnInit(): void {
  
    this.heroesService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes;
    });
  }

}

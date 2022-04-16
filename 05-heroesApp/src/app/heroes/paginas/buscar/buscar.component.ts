import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  /*Propiedades*/
  termino: string = '';

  /*Arreglo de heroes*/
  heroes: Heroe[] = [];

  /*Propiedad para realizar una peticion http*/
  heroeSeleccionado: Heroe | undefined;

  /*Inyectando el servicio*/
  constructor( private heroesServices: HeroesService) { }

  ngOnInit(): void {
  }

  /*Metodo para la busqueda de heroes*/
  buscando(){
    this.heroesServices.getSugerencias(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    
    /*Validar si es un string vacio*/
    if(!event.option.value){
      /*Esto es para cuando busque una cosa borre lo que estaba antes en una
      busqueda previa*/
      this.heroeSeleccionado = undefined;
      return;
    }
    
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    /*Realizando la peticion HTTP
    NOTA: Puse heroe.id! con el ! para decirle a Angular que confie en mi que siempre
    vendra un id*/
    this.heroesServices.getHeroePorId(heroe.id!)
    .subscribe( heroe => this.heroeSeleccionado = heroe)
  }

}

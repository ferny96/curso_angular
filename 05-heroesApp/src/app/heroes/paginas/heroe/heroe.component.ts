import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interface/heroes.interface';

/*Importanto el switchMap*/
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  /*Para leer la URL necesitamos el activatedRoute, tambien debemos inyectar
  el servicio*/
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    
    /*El switchMap recibe lo que esta emitiendo activatedRoute*/
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
      )
    .subscribe( heroe => this.heroe = heroe)
  }

  /*Metodo para el boton regresar*/
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}

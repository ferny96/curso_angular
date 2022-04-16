import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  /*Propiedades
  NOTA: En pais me va a marcar error por lo cual debemos de poner ! que significa que le decimos
  a typescript que confie en nosotros*/
  pais!: Pais;

  /*NOTA: El ActivatedRoute tiene todo lo necesario para podernos suscribir a los cambios de la
  URL*/
  constructor(
    private activarRuta: ActivatedRoute,
    private paisService: PaisService) { }

  /*NOTA: El ngOnInit es un buen lugar para suscribirnos en los cambios*/
  ngOnInit(): void {

    /*NOTA: Este codigo lo vamos a reducir a unas cuantas lineas

    this.activarRuta.params
    .subscribe( ({ id }) => {
      console.log(id);

      this.paisService.paisPorCodigo(id)
      .subscribe(pais => {
        console.log(pais);
      })
    });*/

    /*NOTA: El switchMap es uno de los operadores de transformacion mas
    interesantes de rxjs, nos permite enviar un obserbable y recibir uno*/
    /*NOTA: Esto codigo funciona casi igual al que esta comentado arriba*/
    this.activarRuta.params
    .pipe(
      switchMap( ({id}) => this.paisService.paisPorCodigo(id)),
      tap(console.log)/*tap es un operador que dispara un efecto secundario*/
    )
    .subscribe( pais => {
      this.pais = pais.shift();
    })

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumerosComponent } from './paginas/numeros/numeros.component';
import { NoComunesComponent } from './paginas/no-comunes/no-comunes.component';
import { BasicosComponent } from './paginas/basicos/basicos.component';
import { OrdenarComponent } from './paginas/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports: [
    /*NOTA IMPORTANTE: ya que estos componentes los vamos a utilizar fuera del
    directorio ventas, es importante exportarlos*/
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})

export class VentasModule { }

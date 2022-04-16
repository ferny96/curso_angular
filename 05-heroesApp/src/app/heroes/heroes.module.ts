import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListadoComponent } from './paginas/listado/listado.component';

/*NOTA: Si otros modulos que necesitan los componentes exportados del materialModule
Angular lo va a usar y no sera necesario volverlo a cargar*/
import { MaterialModule } from '../material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';

/*Solo con este modulo vamos a trabajar con el flex-layout*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})

export class HeroesModule { }

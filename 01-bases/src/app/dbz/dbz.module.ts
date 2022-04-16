/*NOTA: Este modulo se genero por consola, cuando se genera por consola nos crea:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

Si no genera el: import { CommonModule } from '@angular/common'; hay que hacerlo
manualmente*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    /*Importamos FormsModule para poder hacer uso de ngSubmit, entre otros*/
    FormsModule
  ],providers: [
    /*Importando dbz.service.ts*/
    DbzService
  ]
})
export class DbzModule { }

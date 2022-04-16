import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
/*Remover contador.component.ts, y crear el modulo
import { ContadorComponent } from './contador/contador/contador.component';*/
/*Aqui vamos a eliminar estos dos porque ya los tengo en HeroesModule, y en imports
vamos a importar HeroesModule:
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
    /*Comentamos el contador
    ContadorComponent*/

    /*De aqui tambien vamos a quitar estos dos:
    HeroeComponent,
    ListadoComponent*/
  ],
  imports: [
    BrowserModule,
    /*Aqui importamos HeroesModule*/
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

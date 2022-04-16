/*Importamos del angular el common*/
import { CommonModule } from "@angular/common";
/*Importamos del angular core NgModule*/
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

/*Creamos el decorador*/
@NgModule({
    /*DECLARACIONES: en pocas palabras son los componentes que tengo en el directorio*/
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /*EXPORTS: Es lo que quiero hacer visible
    fuera del modulo*/
    exports: [
        ListadoComponent
    ],
    /*IMPORTS: Aqui van unicamente modulos*/
    imports: [
        /*El commonModule es de mucha utilidad porque nos permite hacer uso de las
        directivas: *ngFor, *ngIf entre otras*/
        CommonModule
    ]

})
/*Creamos la clase con el mismo nombre y le agregamos Module, ejemplo: HeroesModule*/
export class HeroesModule{

}
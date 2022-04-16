/*Servicios o service
NOTA: Los servicios son una clase, pero lo que los diferencia es que su decorador en un
@Injectable*/

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    /*NOTA: Los servicios nos ayudan a centralizar la informacion*/
    private _personaje: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personaje(): Personaje[] {
        return [...this._personaje];
    }

    constructor(){
        console.log('Servicio inicializado');
    }

    agregarPersonaje(datos: Personaje){
        this._personaje.push( datos )
    }
}
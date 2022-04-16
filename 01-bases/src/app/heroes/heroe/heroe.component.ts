import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'IronMan';
    edad: number = 25;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    /*Concepto de one way data binding - enlazado en una sola via*/
    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}
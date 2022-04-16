import { Pipe, PipeTransform } from "@angular/core";

/*NOTA: Agregando un decorador para indicarle a angular que esta clase es un pipe*/
@Pipe({
    /*name: es el nombre que le quiero dar al pipe*/
    name: 'mayusculas'
})

/*NOTA: Todos los pipes necesitan implimentar PipeTransform, al hacerlo de manera escrita,
ahora si lo hacemos de manera automatica esto se creara de forma automatica*/
export class MayusculasPipe implements PipeTransform {

    /*NOTA: Al hacer uso del pipe mayusculas, primero hay que importar este archivo, en nuestro
    caso este archivo lo vamos a importar en ventas.module.ts, pero tambien lo podriamos
    importar de manera global en app.component.ts
    
    NOTA IMPORTANTE: Este archivo lo vamos a importar en declarations*/
    
    /*NOTA IMPORTANTE: Para hacer un argumento opcional, en este caso seria enMayusculas*/
    transform(val: string, enMayusculas: boolean = true): string {
        
        /*Con if*/
        /*if(enMayusculas){
        return val.toUpperCase();
        } else {
            return val.toLocaleLowerCase()
        }*/

        /*Con un operador ternario*/
        return (enMayusculas) ? val.toUpperCase() : val.toLocaleLowerCase();

    }

}
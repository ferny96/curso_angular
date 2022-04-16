
/*Creamos enum, para poder exportarlo y poder utilizarlo en
el componente HTML*/
export enum color {
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: color;
}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*Importamos lo que creamos en app.quicktype.io*/
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GitsService {

  /*API de giphy*/
  private apiKey: string = 'LoZmMS35pYE8ILGFL1p8na5BSbNwN731';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  /*Propiedad para la generacion del historial*/
  private _historial: string[] = [];

  /*NOTA: Resultados sera de tipo Gif, Gif viene de la interface, tambien lo debemos
  de importar*/
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  /*NOTA: Cuando tenemos un constructor asi es que vamos a inyectar un servicio.
  NOTA 2: El constructor se ejecuta la primera y unica vez que el servicio es llamado*/
  constructor( private http: HttpClient){

    /*Cargar del localStorage en el sidebar*/
    if(localStorage.getItem('historial')){
      /*Almacena en el sidebar los elementos buscados*/
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

      /*Mostrar las imagenes*/
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }

    /*Esta tambien es una forma de hacerlo y nos mostrara el mismo resultado
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];*/
  }

  /*Funcion para la busqueda de los gifs*/
  buscarGifs(query: string = ''){

    /*Para evitar que los repetidos se puedan agregar si estan en minuscula
    en mayuscula y viceversa*/
    query = query.trim().toLowerCase();
    
    /*Si ya existe en el arreglo, ya no lo vuelve a agregar*/
    if(!this._historial.includes( query )){
      this._historial.unshift(query);

      /*Limitar la cantidad de registros de busqueda en el sidebar*/
      this._historial = this._historial.splice(0,10);


      /*Grabar en localStorage para no perder lo que tenemos al actualizar el navegador
      RECORDATORIO: JSON.stringify nos sirve para convertir arreglos a texto*/
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    /*Vamos a crear parametros para mejorar la url*/
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    /*Realizando una peticion HTTP
    NOTA: Angular tiene su propia forma de hacer este tipo de peticiones
    
    NOTA IMPORTANTE: Los obserbable son mas poderosos que las promesas
    Se pone : any en resp porque al poner .data nos muestra un error entonces para
    saltarnos ese inconveniente se puso resp dentro de parentesis, ejemplo
    (resp: any) y asi es como le decimos a TS me vale madre, lo unico que ocupo
    es la data
    
    lo dicho anteriormente ya no tiene validez, como .get es de tipo generico le pasaremos
    <SearchGifsResponse> lo cual viene de la interface*/
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`, {params})
    .subscribe( (resp ) => {
      /*NOTA IMPORTANTE: Al hacer uso de any podemos tener problemas como por ejemplo:
      resp.daata, al ejecutar la app no nos dira que el problema esta en .daata y asi seria
      un error algo dificil de encontrar*/
      this.resultados = resp.data;

      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    } )


  }
}

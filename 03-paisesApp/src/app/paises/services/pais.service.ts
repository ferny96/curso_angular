import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /*Este es la base del url*/
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,cioc,flags,population')
  }

  constructor(private http: HttpClient) { }

  /*NOTA: Para que un observable se dispare debo de tener un subscribe, pero esta vez
  el subscribe ira en el archivo por-pais.component.ts.
  NOTA: Al observable le asignamos el tipado, en este caso Pais de la interface
  pais.interface.ts, las [] son porque regresa un arreglo*/
  buscarPais(termino: string): Observable<Pais[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams});
  }

  buscarCapital (termino: string): Observable<Pais[]> {
    
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams});
  }

  /*Esto es para mostrar un pais en espacifico con su codigo en la URL*/
  paisPorCodigo (id: string): Observable<Pais> {
    
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  /*NOTA: Para mostrar los paises de cada region*/
  buscarRegion(region: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams}).pipe(tap(console.log))
  }

}

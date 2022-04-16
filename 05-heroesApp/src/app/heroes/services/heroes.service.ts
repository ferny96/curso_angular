import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  /*Propiedad para la url que viene de environments.ts
  OJO en las importanciones debemos de fijarnos que no sea el environments.prod.ts sino
  environments.ts */
  private baseURL: string = environment.baseURL;

  constructor( private http: HttpClient) { }

  /*Metodo para realizar la peticion*/
  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  /*Metodo para mostrar heroe por id*/
  getHeroePorId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`);
  }

  /*Metodo para sugerencias*/
  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}&_limit=6`);
  }

  /*Metodo para agregar nuevo heroe a la bd.json*/
  agregarHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseURL}/heroes`, heroe);
  }

}

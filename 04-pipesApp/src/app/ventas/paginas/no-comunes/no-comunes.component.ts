import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  /*i18nSelect*/
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  /*NOTA: Para que funcione i18nSelect debemos de crear un objeto con los valores
  que deseamos mostrar, al hacer clic en el boton.
  NOTA IMPORTANTE: La propiedad genero debe de hacer match con invitacionMapa, es decir,
  el valor que tenga genero tiene que ser igual al de invitacionMapa*/
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  /*i18nPlural*/
  cliente: string[] = ['Maria','Fernando','Daniel','Angel','Sairy','Anyi','Genesis'];
  
  /*NOTA: Para que funcione i18nPlural debemos de crear un objeto con los valores
  que deseamos mostrar, al hacer clic en el boton.
  NOTA: en la excepcion debemos de poner # para que imprima la cantidad de clientes que estan
  esperando*/
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  /*Tarea cambiar nombre*/
  cambiarNombre(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  /*Tarea borrar cliente*/
  borrarCliente(){
    this.cliente.pop();
  }

  /*NOTA: El arreglo se crear para poder hacer uso de keyValue Pipe*/
  persona = {
    nombre: 'Fernando',
    edad: 25,
    direccion: 'Tegucigalpa, Honduras'
  }

  /*NOTA: Para hacer uso del JSON pipe*/
  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'SpiderMan',
      vuela: true
    },
    {
      nombre: 'Hulk',
      vuela: false
    }
  ]

  /*NOTA: Uso de los asyncPipe*/
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })

}

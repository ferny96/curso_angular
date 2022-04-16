import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListadoComponent } from './paginas/listado/listado.component';


const rutas: Routes = [
  {
    /*Para que el concepto de rutas hijas se cumpla al 100% debemos de hacer lo siguiente:
    1. Agregar component antes de children, component: HomeComponent
    2. Para que lo que esta en children se pueda visualizar en homeComponent debemos de
    agregar lo siguiente: <router-outlet></router-outlet>*/
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

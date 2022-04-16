import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPaginaComponent } from './shared/error-pagina/error-pagina.component';

const rutas: Routes = [
  {
    /*LAZYLOAD: Aqui es lo siguiente:
    Cuando alguiente entre al path cargue sus hijos, los cuales vienen del authModule, cuando se cargue en
    memoria el modulo que traera es el authModule
    m = module*/
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then( m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module')
    .then( m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPaginaComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

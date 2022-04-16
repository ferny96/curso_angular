import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';

/*NOTA: Children son rutas hijas*/
const rutas: Routes = [
  {
    path: '',
    children:
    [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        /*NOTA: Si no me encuentro en login o registro, entonces que me redirija
        a login*/
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]


@NgModule({
  imports: [
    /*NOTA IMPORTANTE: Cuando trabajamos con rutas hijas aqui ya no es forRoot sino
    forChildren, recordando que solo podemos tener un forRoot en nuestra aplicacion*/
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }

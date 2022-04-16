import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    /*Importamos AppRoutingModule y es valido, pero tambien se puede
    importar RouterModule, ya que Angular es tan inteligente que sabe
    que ya lo tiene cargado en memoria y solo lo extrae*/
    RouterModule
  ]
})
export class SharedModule { }

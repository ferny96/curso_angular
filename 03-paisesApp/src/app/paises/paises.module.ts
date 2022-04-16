import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './paginas/por-capital/por-capital.component';
import { PorPaisComponent } from './paginas/por-pais/por-pais.component';
import { PorRegionComponent } from './paginas/por-region/por-region.component';
import { VerPaisComponent } from './paginas/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    /*NOTA: FormsModule nos permite hacer uso de ngModul*/
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }

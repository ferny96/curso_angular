import { NgModule } from '@angular/core';

/*Importaciones de primeNG*/
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
/*NOTA: Para hacer uso de FildsetModule necesitamos el BrowserAnimationsModule
de lo contrario nos mostrara error, pero lo debemos de importar en
app.component.ts y realizar otra configuracion en el mismo archivo*/
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

/*NOTA: De aqui eliminamos declarations y imports ya que este modulo solo lo vamos
a utilizar para exportar*/
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})

export class PrimeNgModule { }

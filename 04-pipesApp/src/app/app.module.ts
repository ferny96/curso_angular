import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

/*NOTA: importando BrowserAnimationsModule para poder hacer uso de FieldsetModule
de primeNG */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
/*NOTA IMPORTANTE: Cambiar el locale de la aplicacion, necesitamos
importar dos cosas:
NOTA: localeEs ese nombre me lo invente, si necesito otro idioma debo de
importarlo, por ejemplo frances*/
import localeEsHN from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData (localeEsHN);
registerLocaleData (localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    /*Para realizar el cambio de forma global de locale lo hacemos desde aqui de
    providers*/
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*modulo de rutas*/
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorCapitalComponent } from "./paises/paginas/por-capital/por-capital.component";
import { PorPaisComponent } from "./paises/paginas/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/paginas/por-region/por-region.component";
import { VerPaisComponent } from "./paises/paginas/ver-pais/ver-pais.component";

/*aqui se definen las rutas principales de la aplicacion
routes es de tipo Routes el cual lo debemos de importar*/
const routes: Routes = [
    {
        /*path: '' simularia que es localhost:4200*/
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        /*Aqui path: 'region' es region porque indica que cuando
        se le de clic a region tiene que mostrar ese componente*/
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        /*Para que sea dinamico le ponemos /:id */
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        /*Este es por si no ingresa a ninguno de los anteriores lo
        redirija hacia la pantalla principal.*/
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        /*Aqui va el RouterModule, forRoot son mis rutas y entre ()
        le ponemos las que definimos arriba routes.
        NOTA: Solo se puede tener un forRoot en la aplicacion,
        si tuvieramos otras rutas entonces estas serian rutas
        hijas forChild*/
        RouterModule.forRoot(routes)
    ],
    exports: [
        /*Aqui exportamos el RouterModule, para usarlo en cualquier luegar
        de la aplicacion*/
        RouterModule
    ]
})
export class AppRoutingModule {}
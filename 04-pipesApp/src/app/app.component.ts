import { Component, OnInit } from '@angular/core';
/*NOTA: Importando PrimeNGConfig para aplicar el efecto de bolita en los
Fieldset, primeNGConfig en un servicio por eso lo inyectamos en el constructor*/
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private primeNGConfig: PrimeNGConfig){}

  ngOnInit(){
    /*NOTA: Debemos de agregar esta linea para que funcione el efecto bolita en el
    fieldset*/
    this.primeNGConfig.ripple = true;
  }
}

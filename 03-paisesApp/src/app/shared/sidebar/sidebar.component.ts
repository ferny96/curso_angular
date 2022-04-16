import { Component, OnInit } from '@angular/core';

/*
styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
  NOTA: El icono de la manito solo se mostrara en los li del sidebar
*/

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

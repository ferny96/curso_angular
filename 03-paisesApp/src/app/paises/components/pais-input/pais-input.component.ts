import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

/*Al impportar onInit e implementar con implements OnInit me va a arrojar error para
resolverlo tengo que presionar control + . y dar clic en implementar*/
export class PaisInputComponent implements OnInit{
  
  /*Es usual que a los eventos se les ponga 'on' para indicar que es un evento
  NOTA: Al EventMitter le pasamos string porque el termino a buscar es de tipo
  string
  
  NOTA2: El eventMitter nos sirve para emitir por ejemplo eventos*/
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  /*Recibimos el placeholder*/
  @Input() placeholder: string = '';

  /*Subject es un obserbable, el cual nos permite hacer un observable manualmente,
  el debounce se va a emitir despues que deje de escribir*/
  debouncer: Subject<string> = new Subject();

  /*NOTA: Este componente es para el input de buscar, el cual deseamos que sea reutilizable*/
  termino: string = '';
  
  /*NOTA: Se dispara una vez cuando el componente ha sido creado.
  NOTA2: En el pipe llamamos a debounceTime y le decimos que deje de emitir durante 300 milesimas
  de segundos y una vez para ese tiempo imprima resultados*/
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    /*NOTA: Cuando las personas den enter lo que se va a emitir es el termino*/
    this.onEnter.emit(this.termino);
  }

  /*Cada vez que se presione una tecla se mandara a llamar al next el cual carga al termino*/
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}

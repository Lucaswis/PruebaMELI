import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  public buscador: string = "";
  @Output() realizarBusqueda: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buscar() {
    this.realizarBusqueda.emit(this.buscador);
  }

  home(){
    this.router.navigate(['/']);
  }
}

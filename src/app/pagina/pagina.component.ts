import { Component, OnInit } from '@angular/core';
import { ItemsService } from "./../Shared/items.service";
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public products: any = [];
  public ultimaCategoria: number = 0;
  constructor(private _itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {

    let primeraBusqueda = "Productos";
    if (this._itemsService.palabraBuscada != "") {
      this._itemsService.showItems(this._itemsService.palabraBuscada).subscribe((items) => {
        this.products = items.items
      })

    }
    else {
      this._itemsService.showItems(primeraBusqueda).subscribe((items) => {
        this.products = items.items
      })
    }


  }
  busqueda(frase: string) {

    this._itemsService.showItems(frase).subscribe((items) => {

      this.products = items.items
    })
  }

  abrirDetalle(item: any) {

    this.router.navigate(['/detailProduct', item.id]);

  }
}

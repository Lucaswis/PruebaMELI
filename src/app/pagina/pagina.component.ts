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
    
    // this._itemsService.showItems().subscribe((items) => {
    //   console.log("House", items);
    //   this.ultimaCategoria = items.categories.length;
    //   console.log(this.ultimaCategoria);

    //   this.products = items
    // })

  }
  busqueda(frase: string) {

    this._itemsService.showItems().subscribe((items) => {
      this.ultimaCategoria = items.categories.length;
      console.log(this.ultimaCategoria);

      this.products = items
    })
  }

  abrirDetalle(item: any) {

    this.router.navigate(['/detailProduct', item.id]);

  }
}

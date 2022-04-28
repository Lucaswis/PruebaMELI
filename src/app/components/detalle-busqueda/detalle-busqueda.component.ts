import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from "./../../Shared/items.service"
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html',
  styleUrls: ['./detalle-busqueda.component.css']
})
export class DetalleBusquedaComponent implements OnInit {
  public id: string | null = "";
  public item: any;
  public ultimaCategoria: number = 0;

  constructor(private router: Router, private _itemsService: ItemsService, private route: ActivatedRoute, private toast: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._itemsService.buscarItemID(this.id).subscribe((itemInfo) => {
      this.item = itemInfo.item;
    
    })
  }

  busqueda(detalleBusqueda: string) {
    this._itemsService.palabraBuscada = detalleBusqueda;
    this.router.navigate(['/']);
  }

  realizarCompra(){
    this.toast.success("Se ha realizado la compra, Muchas gracias!!", "Compra realizada");
    this.router.navigate(['/']);
  }
}

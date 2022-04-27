import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleBusquedaComponent } from './components/detalle-busqueda/detalle-busqueda.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  { path: '', component: PaginaComponent },
  { path: 'detailProduct/:id', component: DetalleBusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

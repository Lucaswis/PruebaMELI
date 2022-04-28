import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public palabraBuscada: string = "";
  constructor(private http: HttpClient) { }

  showItems(textBusqueda: string): Observable<any> {

    return this.http.get<any>(`${environment.apiUrl}/api/items?q=${textBusqueda}`);
  }

  buscarItems(mensaje: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/items?q:${mensaje}`);
  }


  buscarItemID(id: string | null): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/items/${id}`);
  }
}

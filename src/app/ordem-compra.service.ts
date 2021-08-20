import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(
    private http: HttpClient
  ) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<number>(`${URL_API}/pedidos`, JSON.stringify(pedido), httpOptions);
  }

}

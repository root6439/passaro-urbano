import { map } from 'rxjs/operators';

import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/internal/operators/retry';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Injectable({
	providedIn: 'root'
})
export class OfertasService {

	constructor(private http: HttpClient) { }

	public getOfertas(): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas`).toPromise();
	}

	public getOfertasEmDestaque(): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`).toPromise();
	}

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`).toPromise();
	}

	public getOfertaPorId(id: number): Promise<Oferta> {
		return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`).toPromise();
	}

	public getComoUsarOfertaPorId(id: number): Promise<String> {
		return this.http.get<String>(`${URL_API}/como-usar?id=${id}`).toPromise();
	}

	public getOndeFicaOfertaPorId(id: number): Promise<String> {
		return this.http.get<String>(`${URL_API}/onde-fica?id=${id}`).toPromise();
	}

	public pesquisaOfertas(termo: string): Observable<Array<Oferta>> {
		return this.http.get<Array<Oferta>>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`).pipe(
			retry(3)
		);
	}

}
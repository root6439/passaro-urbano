import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OfertasService {

	constructor(private http: HttpClient) {}

	public getOfertas(): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas`).toPromise();
	}

	public getOfertasEmDestaque(): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`).toPromise();
	}

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`).toPromise();
	}

	public getComoUsarOfertaPorId(id: number): Promise<String> {
		return this.http.get<String>(`${URL_API}/como-usar?id=${id}`).toPromise();
	}

	public getOndeFicaOfertaPorId(id: number): Promise<String> {
		return this.http.get<String>(`${URL_API}/onde-fica?id=${id}`).toPromise();
	}

}
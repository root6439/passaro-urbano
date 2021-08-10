import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit, OnDestroy {

  private ofertaSub: Observable<Array<Oferta>>
  private subPesquisa: Subject<string> = new Subject<string>();
  public ofertas: Array<Oferta>;

  constructor(
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertaSub = this.subPesquisa.pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log("Requisição para server api");
        if (termo.trim() == "") {
          return of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOfertas(termo);
      })
    ), catchError((erro: any, observable: Observable<Oferta[]>) => {
      console.log(erro);
      return of<Oferta[]>([]);
    }
    )

    this.ofertaSub.subscribe((ofertas: Array<Oferta>) => {
      this.ofertas = ofertas;
    })
  }

  ngOnDestroy(): void {

  }

  public pesquisa(value: string): void {
    console.log("Método pesquisa");
    this.subPesquisa.next(value);
  }

}

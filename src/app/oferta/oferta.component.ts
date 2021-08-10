import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];

    this.ofertaService.getOfertaPorId(id).then((resp: Oferta) => {
      this.oferta = resp[0];
    })

    //alguns exemplos com observable
    // let tempo = interval(2000);
    // this.tempoSub = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // })

    // let meuObservable = new Observable((observer: Observer<String>) => {
    //   observer.next('primeiro evento');
    //   observer.next("segundo")

    //   observer.complete()
    // });

    // this.observableTesteSub = meuObservable.subscribe(
    //   (resp: any) => console.log(resp),
    //   (err) => console.log(err),
    //   () => console.log('tudo certo')

    // )
  }

  ngOnDestroy(): void {
  }

}

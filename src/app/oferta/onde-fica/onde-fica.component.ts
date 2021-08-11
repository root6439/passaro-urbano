import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((param: Params) => {
      this.ofertaService.getOndeFicaOfertaPorId(param.id).then((resp: any) => {
        this.ondeFica = resp[0].descricao;
      });
    })

  }

}

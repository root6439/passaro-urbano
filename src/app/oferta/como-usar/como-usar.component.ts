import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {
    
    this.route.parent.params.subscribe((param: Params) => {
      this.ofertaService.getComoUsarOfertaPorId(param.id).then((resp: any) => {
        this.comoUsar = resp[0].descricao
      })
    })

  }

}

import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit(): void {
    
    this.ofertasService.getOfertasEmDestaque().then( (ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    }).catch( (param: any) => {
      console.log(param);
    })

  }

}

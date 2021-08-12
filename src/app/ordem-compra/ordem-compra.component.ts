import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string;
  public numero: number;
  public complemento: string;
  public formaPagamento: string;

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(value: string): void {
    this.endereco = value;
  }

  public atualizaNumero(value: number): void {
    this.numero = value;
  }

  public atualizaComplemento(value: string): void {
    this.complemento = value;
  }
  
  public atualizaFormaPagamento(value: string): void {
    this.formaPagamento = value;
  }

}

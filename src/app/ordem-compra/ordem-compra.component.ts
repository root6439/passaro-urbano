import { Pedido } from './../shared/pedido.model';
import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  public endereco: string = '';
  public numero: number;
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {



  }

  public atualizaEndereco(value: string): void {
    this.endereco = value;
    this.enderecoValido = this.endereco.length > 3;
    this.enderecoEstadoPrimitivo = false;
  }

  public atualizaNumero(value: number): void {
    this.numero = value;
    this.numeroValido = this.numero != undefined && this.numero != 0;
    this.numeroEstadoPrimitivo = false;
  }

  public atualizaComplemento(value: string): void {
    this.complemento = value;
    this.complementoValido = this.complemento.length > 3;
    this.complementoEstadoPrimitivo = false;
  }

  public atualizaFormaPagamento(value: string): void {
    this.formaPagamento = value;
    this.formaPagamentoValido = this.formaPagamento.length > 0;
    this.formaPagamentoEstadoPrimitivo = false;
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento);
    this.ordemCompraService.efetivarCompra(pedido).subscribe((resp: any) => {
      this.idPedidoCompra = resp.id;
    }, err => console.log(err))
  }

}

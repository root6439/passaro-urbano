import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { ItemCarrinho } from '../shared/item-carrinho';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedido: number;
  public itens: Array<ItemCarrinho> = [];

  public form: FormGroup = new FormGroup({
    "endereco": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    "numero": new FormControl(null, [Validators.required, Validators.minLength(1)]),
    "complemento": new FormControl(null),
    "formaDePagamento": new FormControl("", [Validators.required])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.itens = this.carrinhoService.exibirItens();

  }

  public confirmarCompra(): void {

    if (this.form.status == "INVALID") {
      this.form.markAllAsTouched();
    } else {

      if (this.carrinhoService.exibirItens().length == 0) {
        alert('Você não selecionou nenhum item!');
        return;
      }

      let pedido: Pedido = new Pedido(
        this.form.get('endereco').value,
        this.form.get('numero').value,
        this.form.get('complemento').value,
        this.form.get('formaDePagamento').value,
        this.carrinhoService.exibirItens()
      );

      this.ordemCompraService.efetivarCompra(pedido).subscribe((idPedido: number) => {
        this.idPedido = idPedido;
        this.carrinhoService.limparCarrinho();
      }, err => console.log(err))

    }

  }

  

}

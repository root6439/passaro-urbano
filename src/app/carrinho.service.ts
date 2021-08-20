import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: Array<ItemCarrinho> = [];

  constructor() { }

  public exibirItens(): Array<ItemCarrinho> {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {

    let itemCarrinhoFound = this.itens.find((item: ItemCarrinho) => item.oferta.id == oferta.id);

    if (itemCarrinhoFound) {
      itemCarrinhoFound.quantidade += 1;
    } else {
      this.itens.push(new ItemCarrinho(oferta, 1));
    }

  }

  public totalCarrinho(): number {

    let total: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      total += item.oferta.valor * item.quantidade;
    })

    return total;

  }

}

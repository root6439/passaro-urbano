import { Oferta } from "./oferta.model";

export class ItemCarrinho {
  constructor(
    public oferta: Oferta,
    public quantidade: number
  ) {}
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'descricaoReduzida'})
export class DescricaoReduzida implements PipeTransform{

  transform(value: string, length: number = 15, inicialize: number = 0): string {
    return value.length > length ? value.substr(inicialize, length).concat('...') : value;
  }

}
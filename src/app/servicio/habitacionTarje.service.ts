
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaz/interefaz';
import { HEROES } from '../data/ArrayHabitaciones';
@Injectable()
export class HeroesService {
  private DatosHeroes: Heroe[];
  constructor() {
    this.DatosHeroes = HEROES;
    console.log("Servicio listo para usar!!!");
  }


  getHeroes(): Heroe[] {
    return this.DatosHeroes;
  }

  getHeroe(idx: string) {
    return this.DatosHeroes[idx];
  }

  /* buscarHeroes(termino: string): Heroe[] {

    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.DatosHeroes.length; i++) {

      let heroe = this.DatosHeroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe)
      }

    }

    return heroesArr;

  } */
  // getProducts()
  // {
  //   return this.productList = this.firebase.list('products');
  // }

  // insertProduct(product: Product)
  // {
  //   this.productList.push({
  //     name: product.name,
  //     category: product.category,
  //     location: product.location,
  //     price: product.price
  //   });
  // }

  // updateProduct(product: Product)
  // {
  //   this.productList.update(product.$key, {
  //     name: product.name,
  //     category: product.category,
  //     location: product.location,
  //     price: product.price
  //   });
  // }

  // deleteProduct($key: string)
  // {
  //   this.productList.remove($key);
  // }

}



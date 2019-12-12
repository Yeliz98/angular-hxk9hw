import { Injectable } from '@angular/core';
import { News } from '../model/news';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewsService {

  private news: News[];
  constructor() {
      this.news = [
      {
        topic:'akzeptierter Konferenzbeitrag',
        comment:'Angular for Material Design 2020'
      },
      {
       topic:'Besuch Konferenzen',
      comment:'WET 2019 wurde am 20.12.2019 wurde von der ganzen IWE Gruppe besucht.'
      },
      {
       topic:'Erhalt neuen Projektes',
      comment:'Wir freuen uns euch mitteilen zu können, dass wir ein neues Projekt von der Hochschule Flensburg erhalten haben. Informationen dazu findet ihr am 1.Februar 2020 bei den Projekten.'
      }
    ];
  }

  getNews() {
    return this.news;
  }
/*
  changeQuantity(id: number, changeInQuantity: number): Observable<News> {
    const product = this.products
        .find(prod => prod.id === id);
    product.quantityInCart += changeInQuantity;
    return Observable.of(product);
  }
*/
  createNews(news: News) {
   // let newsClone = Object.assign({}, news);
    //productClone.id = this.products.length + 1;
    //productClone.quantityInCart = 0;
    this.news.push(news);
    //return Observable.of(newsClone);
  }
}
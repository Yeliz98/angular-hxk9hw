import { Injectable } from '@angular/core';
import { News } from '../new/model/news';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewsService {

  private news: News[];
  constructor() {
      this.news = [
      {
        topic:'Akzeptierte Konferenzbeiträge',
        comment:'wissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenzwissenschaflichewissenschafliche Konferenzwissenschafliche Konferenzwissenschafliche Konferenz'
      },
      {
       topic:'Besuch Konferenzen',
      comment:'LehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltungLehrveranstaltung LehrveranstaltungLehrveranstaltungLehrveranstaltung LehrveranstaltungLehrveranstaltung vLehrveranstaltungLehrveranstaltungLehrveranstaltung'
      },
      {
       topic:'Erhalt neuen Projektes',
      comment:'IndustrietageIndustrietageIndustrietageIndustrietage IndustrietageIndustrietageIndustrietage IndustrietageIndustrietageIndustrietage Industrietage'
      }
    ];
  }

  getProducts(): Observable<News[]> {
    return Observable.of(this.news);
  }
/*
  changeQuantity(id: number, changeInQuantity: number): Observable<News> {
    const product = this.products
        .find(prod => prod.id === id);
    product.quantityInCart += changeInQuantity;
    return Observable.of(product);
  }
*/
  createNews(news: News): Observable<any> {
    let newsClone = Object.assign({}, news);;
    //productClone.id = this.products.length + 1;
    //productClone.quantityInCart = 0;
    this.news.push(newsClone);
    return Observable.of(newsClone);
  }
}
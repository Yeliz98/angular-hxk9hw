import { Component, OnInit } from '@angular/core';
import { News } from '../new/model/product';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  template: `
    <app-new [news]="news"
                      *ngFor="let news of news$ | async"></app-new>
  `,
  styles: []
})
export class NewsListComponent implements OnInit {

  public news$: Observable<News[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news$ = this.newsService.getNews();
  }
}
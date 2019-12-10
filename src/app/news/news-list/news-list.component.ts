import { Component, OnInit } from '@angular/core';
import { News } from '../../model/news';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl:  './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news:News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
    console.log(this.news);
  }
}
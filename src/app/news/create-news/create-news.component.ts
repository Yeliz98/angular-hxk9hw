import { Component } from '@angular/core';
import { News } from '../new/model/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent {

  public message = '';
  constructor(private newsService: NewsService) { }

  createNews(newsForm) {
    if (newsForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const news: News = newsForm.value;
      this.newsService.createNews(news)
    }
  }

}
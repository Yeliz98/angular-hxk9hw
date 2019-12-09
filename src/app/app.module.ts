import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { GroupComponent } from './group/group.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { NewComponent } from './news/new/new.component';
import { ProjectComponent } from './projects/project/project.component';
import { PublicationComponent } from './publications/publication/publication.component';
import { NewsService } from './services/news.service';
import { CreateNewsComponent } from './news/create-news/create-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
      {path:'group', component:GroupComponent}, 
      {path:'team', component:TeamListComponent},
      {path:'events', component:EventListComponent},
      {path:'new', component:NewsListComponent},
      {path:'publication', component:PublicationComponent},
      {path:'project', component:ProjectComponent},
      {path:'login', component:LoginComponent},
  ], {useHash: true})],
  declarations: [ AppComponent, GroupComponent, TeamListComponent, EventListComponent, NewComponent, ProjectComponent, PublicationComponent, CreateNewsComponent, NewsListComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsService]
})
export class AppModule { }

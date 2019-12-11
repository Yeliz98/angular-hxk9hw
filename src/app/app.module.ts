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
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { PublicationService } from './services/publication.service';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';
import { UserService } from './services/user.service';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { CreatePublicationComponent } from './publications/create-publication/create-publication.component';
import { TeamService } from './services/team.service';
import { CreateTeamComponent } from './team/create-team/create-team.component';
import { UserSiteComponent } from './user/user-site/user-site.component';
import {FormControl, FormGroup,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
        ReactiveFormsModule, RouterModule.forRoot([
      {path:'group', component:GroupComponent}, 
      {path:'team', component:TeamListComponent},
      {path:'events', component:EventListComponent},
      {path:'new', component:NewsListComponent},
      {path:'publication', component:PublicationListComponent},
      {path:'project', component:ProjectListComponent},
      {path:'login', component:LoginComponent},
      {path:'contact', component:ContactComponent},
      {path:'imprint', component:ImprintComponent}, 
      {path:'user', component:UserSiteComponent}
  ], {useHash: true})],
  declarations: [ AppComponent, GroupComponent, TeamListComponent, EventListComponent, NewComponent, ProjectComponent, PublicationComponent, CreateNewsComponent, NewsListComponent, LoginComponent, ContactComponent, ImprintComponent, ProjectListComponent, PublicationListComponent, CreateProjectComponent, CreatePublicationComponent, CreateTeamComponent, UserSiteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsService, ProjectService, PublicationService, UserService, TeamService]
})
export class AppModule { }

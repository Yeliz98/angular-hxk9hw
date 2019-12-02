import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GroupComponent } from './group/group.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GroupComponent, TeamListComponent, EventListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

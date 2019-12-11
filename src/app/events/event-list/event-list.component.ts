import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public event:Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvents();
    console.log(this.event);
  }

}
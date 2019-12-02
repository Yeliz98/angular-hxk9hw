import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public event: Array<Event>;

  constructor() { }

  ngOnInit() {

    this.event = [
      new Event(
        'Cloud-Architekturen',
        'wissenschafliche Konferenz',

      ),
      new Event(
       'Angular 2020',
        'Lehrveranstaltung'),
      new Event(
       'Angular Tour',
        'Industrietage')
    ];
  }

}
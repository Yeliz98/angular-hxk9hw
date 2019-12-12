import { Injectable } from '@angular/core';
import {Event} from '../model/event'

@Injectable()
export class EventService {

  private event: Event[];

  constructor() {
    this.event = [
      {
        name: 'HTCS',
        kind: 'wissenschaftliche Konferenz'
      },
      {
        name: 'Angular 8',
        kind: 'Lehrveranstaltung'
      },
      {
        name: 'WET 2020',
        kind: 'Industrietage'
      }
    ];
   }
    getEvents() {
    return this.event;
  }

  createEvents(event: Event) {
   
    this.event.push(event);
    
  }
}
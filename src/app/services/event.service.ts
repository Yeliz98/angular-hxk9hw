import { Injectable } from '@angular/core';
import {Event} from '../model/event'

@Injectable()
export class EventService {

  private event: Event[];

  constructor() {
    this.event = [
      {
        name: 'Cloud-Architekturen',
        kind: 'wissenschaftliche Konferenz'
      },
      {
        name: 'Angular 2020',
        kind: 'Lehrveranstaltung'
      },
      {
        name: 'Angular Tour',
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
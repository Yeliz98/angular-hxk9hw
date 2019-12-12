import { Component, OnInit } from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent{

  public message = '';
  
  constructor(private eventService: EventService) { }

  createEvents(eventForm) {
    if (eventForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const event: Event = eventForm.value.event;
      this.eventService.createEvents(event);
    }
  }
}
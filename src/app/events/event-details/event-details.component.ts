import { Component } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';
@Component({
  templateUrl:'./event-details.component.html',
  styles:[`
  .container { padding-left:20px; padding-right: 20px;}
  .event-image { height: 100px;}
  `],
})
export class EventDetailsComponent {
  event: IEvent;

  constructor (private eventService: EventsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}

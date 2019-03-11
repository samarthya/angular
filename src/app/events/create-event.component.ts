import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { EventsService, IEvent } from './shared';
@Component({
  templateUrl: './create-event.component.html',
  styles:[`
    em {
      float: right;
      color: crimson;
      padding-left: 10px;
    }

    form > button {
      margin-left: 5px;
    }
  `],
})

export class CreateEventComponent {
  isDirty: boolean = false;
  newEventForm: NgForm;
  newEvent:any;

  constructor(private routerService: Router, private eventService: EventsService){

  }

  saveEvent(formValues: any) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.routerService.navigate(['events']);
  }

  onCancel() {
    this.routerService.navigate(['events']);
  }

}

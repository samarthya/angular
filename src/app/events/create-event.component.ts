import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { EventsService, IEvent } from "./shared";
@Component({
  templateUrl: "./create-event.component.html",
  styles: [`
    em {
      color: crimson;
      float: right;
      padding-left: 10px;
    }

    form > button {
      margin-left: 5px;
    }
  `],
})
/**
 * Angular forms allow you to:
 * Capture the current value and validation status of a form.
 * Track and listen for changes to the form's data model.
 * Validate the correctness of user input.
 * Create custom validators and input elements.
 */
export class CreateEventComponent {
  public isDirty: boolean = false;
  public newEventForm: NgForm;
  public newEvent: any;

  constructor(private routerService: Router, private eventService: EventsService) {

  }

  /**
   * Save the event.
   * @param formValues : string[]
   */
  public saveEvent(formValues: any) {
    // tslint:disable-next-line:no-console
    console.log(formValues);
    // TODO: Remove the console.log

    this.eventService.saveEvent(formValues);
    this.routerService.navigate(["events"]);
  }

  /**
   * Cancel button functionality
   */
  public onCancel() {
    this.routerService.navigate(["events"]);
  }

}

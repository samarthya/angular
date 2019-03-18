import { Component, OnInit, Inject } from "@angular/core";
import { EventsService } from "./shared/events.service";
import { toBase64String } from "@angular/compiler/src/output/source_map";

import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

/**
 * Using global is not recommended and is neither testable.
 */
// declare let toastr;

@Component({
  selector: "events-list",
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <!--
      Putting *NGFOR on the item I want to repeat.
      Structural directice: Changes the DOM
      -->
      <event-thumbnail [routerLink]="['/events',event.id]" class="col col-md-5" *ngFor = "let event of events"
                      [event]="event"></event-thumbnail>
    </div>
  </div>
  `,
  styles: [
    `
    .thumbnail {
      min-height: 210px;
    }
    `,

  ],
})

export class EventsListComponent implements OnInit {
  public events: IEvent[];

    /**
     * Service injectors
     */
  constructor(private eventService: EventsService,
    private route: ActivatedRoute) {

  }

  public getEvents() {
    return this.eventService.getEvents();
  }

  public ngOnInit() {
    // this.eventService.getEvents().subscribe( events => this.events = events);
    /**
     * Since I have added a resolver fetching the information from the
     * resolved data.
     */
    this.events = this.route.snapshot.data.events;
  }
}

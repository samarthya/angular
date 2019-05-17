import { Component, OnInit, Inject } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";
import { Store, select } from "@ngrx/store";
import { IStore } from "../store/myapp.store";
import * as EventActions from "../actions/events.actions";
import { Observable } from 'rxjs';
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
  private events$: Observable<IEvent[]>;
    /**
     * Service injectors
     */
  constructor(private route: ActivatedRoute,
    private store: Store<IStore>) {
      this.events$ = store.pipe(select(state => state.events ));
      this.events$.subscribe(events=> {
        this.events = events;
      });
  }


  public ngOnInit() {

    this.store.dispatch(new EventActions.LoadEventsAction());

    // this.eventService.getEvents().subscribe( events => this.events = events);
    /**
     * Since I have added a resolver fetching the information from the
     * resolved data.
     */
    // Commented while trying out the state.
    this.events = this.route.snapshot.data.events;
  }
}

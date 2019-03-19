import { Component } from "@angular/core";
import { EventsService } from "../shared/events.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }

      button {
        margin-right: 2px;
      }

      [data-title] {
        margin-top: 3px;
        font-size: 1.5em;
        font-family: cursive;
      }
    `
  ]
})
/**
 * Display the event and the session details. It uses
 * the SessionList component as the child component.
 */
export class EventDetailsComponent {
  public event: IEvent;
  public addMode: boolean;
  public filterBy: string;
  public sortBy: string;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {
    this.addMode = false;
    this.filterBy = "all";
    this.sortBy = "votes";
  }

  public ngOnInit() {
    //this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
    this.resetState();
  }

  private resetState() {
    this.route.params.subscribe((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }
  public onAddSession() {
    this.addMode = true;
  }

  public onSaveClicked(session: ISession) {
    console.log(session);
    const maxID: number = Math.max.apply(
      null,
      this.event.sessions.map(session => {
        session.id;
      })
    );
    console.log(maxID);

    session.id = maxID + 1;
    this.event.sessions.push(session);
    this.addMode = false;
  }

  public onCancelClicked() {
    this.addMode = false;
  }
}

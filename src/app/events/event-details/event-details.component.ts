import { Component } from "@angular/core";
import { EventsService } from "../shared/events.service";
import { ActivatedRoute } from "@angular/router";
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
    `
  ]
})
export class EventDetailsComponent {
  public event: IEvent;
  public addMode: boolean;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {
    this.addMode = false;
  }

  public ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  public onAddSession() {
    this.addMode = true;
  }

  public onSaveClicked(session: ISession) {
    console.log(session);
    const maxID: number = Math.max.apply(null, this.event.sessions.map(session=> {
      session.id
    }));
    console.log(maxID);

    session.id = maxID + 1;
    this.event.sessions.push(session);
    this.addMode = false;
  }

  public onCancelClicked() {
    this.addMode = false;
  }
}

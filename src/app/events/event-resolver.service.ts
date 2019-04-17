import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { EventsService } from './shared';

@Injectable()
export class EventsResolver implements Resolve<any> {
  constructor(private eventService: EventsService) {

  }

  public resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }

}

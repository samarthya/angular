import { Resolve } from "@angular/router";
import { Injectable } from '@angular/core';
import { EventsService } from './events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventResolverService implements Resolve<any> {
  constructor(private eventService: EventsService) {

  }

  /**
   * Should return an Observable.
   */
  //route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot
  resolve() {
    /**
     * Normally you would use subscribe for the observables, but we need this
     * observable to be returned to the Angular so that it can subscribe to it
     * and we just map to it.
     * Subscribe returns a subscription and not an observable.
     */
    return this.eventService.getEvents().pipe(map(events => events));
  }

}

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { EventsService } from "../shared/events.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventsService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    /**
     * Double ! to cast it to boolean
     */
    const canAccess = !!this.eventService.getEvent(+route.params['id']);

    if(!canAccess)
      this.router.navigate(['/404']);

    return canAccess;
  }
}

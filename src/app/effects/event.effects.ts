import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventsService } from '../events';
import * as EventsActions from "../actions/events.actions";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
/**
 * Effects are an RxJS powered side effect model for Store.
 * In a service-based Angular application, components are responsible for interacting with external resources directly
 * through services. Instead, effects provide a way to interact with those services and isolate them from the
 * components.
 * Effects when used along with Store, decrease the responsibility of the component.
 */
@Injectable()
export class EventsEffects {
  constructor(private action$: Actions, private eventService: EventsService) { }

  /**
   * The loadEvents$ effect is listening for all dispatched actions through the Actions stream, but is only interested
   * in the GET_EVENTS event using the ofType operator. The stream of actions is then flattened and
   * mapped into a new observable using the mergeMap operator. The MoviesService#getAll() method returns an observable
   * that maps the movies to a new action on success, and currently returns an empty observable if an error occurs.
   * The action is dispatched to the Store where it can be handled by reducers when a state change is needed. Its also
   * important to handle errors when dealing with observable streams so that the effects continue running.
   */
  @Effect()
  loadEvents$ = this.action$.pipe(
    ofType( EventsActions.ActionTypes.GET_EVENTS ),
    mergeMap(
      () =>
        this.eventService.getEvents().
          pipe(
            map(
              events=> new EventsActions.LoadEventsSuccessAction(events),
              catchError(() => EMPTY)))
    ));
}

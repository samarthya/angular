import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions/events.actions";

export function EventsReducer(state = [], actions: Action) {
  switch (actions.type) {

    case ActionTypes.GET_EVENTS_SUCCESS: {
      return state;
    }

    default: {
      return state;
    }
  }
}

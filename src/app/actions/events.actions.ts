import { IEvent } from "../events";
import { Action } from "@ngrx/store";

export enum ActionTypes {
  GET_EVENTS = "[GET_EVENTS]",
  GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS"
}


export class LoadEventsAction implements Action {
  readonly type = ActionTypes.GET_EVENTS;
  constructor() {}
}

export class LoadEventsSuccessAction implements Action {
  readonly type = ActionTypes.GET_EVENTS_SUCCESS;
  constructor(public payload: IEvent[]) {}
}

/**
 * Type aliases create a new name for a type.
 */
// export type Action = LoadEventsAction | LoadEventsSuccessAction;

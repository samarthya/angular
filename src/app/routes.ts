import { Routes } from "@angular/router";
import { ErrorComponent } from "./errors/error.component";

/**
 * Barrels
 */
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventResolverService,
  CreateSessionComponent,
  EventsResolver,
  SessionListComponent,
} from "./events/index";

export const appRoutes: Routes = [
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventResolverService },
  },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateChecker"],
  },
  {
    path: "events/session/new",
    component: CreateSessionComponent,
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    resolve: {event: EventsResolver}
  },
  { path: "404", component: ErrorComponent },
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  } /** Prefix or Full only two options. */,
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];

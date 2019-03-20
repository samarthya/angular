import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TOASTR_TOKEN,
  JQ_TOKEN,
  DropWellComponent,
  IToastr,
  ModelDialogComponent,
  ModalTriggerDirective, VoterService } from "./common/index";
import { ErrorComponent } from "./errors/error.component";

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventsListComponent,
  EventResolverService,
  EventsService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";

import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UpvoteComponent } from './events/event-details/upvote.component';



let toastr: IToastr = window['toastr'];
let jQuery: Object = window['$'];

@NgModule({
  declarations: [
    /**
     * Which components belong to this module have to
     * be declared in this array. Only takes in declarables
     * and declareables are components, pipes and directives.
     */
    ErrorComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    DropWellComponent,
    DurationPipe,
    ModelDialogComponent,
    ModalTriggerDirective,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule, // Browser specific services.
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventsService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventResolverService,
    EventRouteActivator,
    AuthService,
    VoterService,
    { provide: "canDeactivateChecker", useValue: checkValueIsDirty },
  ],
  bootstrap: [EventsAppComponent],
})

/**
 * Every application has at least one Angular module,
 * the root module that you bootstrap to launch the
 * application. By convention, it is usually called
 * AppModule.
 */
export class AppModule {}

/**
 * Can deactivate checker implemented as a method instead of a class.
 */
export function checkValueIsDirty(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      " There are unsaved changes do you wish to continue?",
    );
  }
  return true;
}

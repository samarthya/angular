import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule} from "@ngrx/store-devtools";
import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  DropWellComponent,
  IToastr,
  ModelDialogComponent,
  ModalTriggerDirective,
  VoterService
} from "./common/index";
import { ErrorComponent } from "./errors/error.component";

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventResolverService,
  EventsService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  LocationValidator,
  EventsResolver,
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";

import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpvoteComponent } from './events/event-details/upvote.component';

import { HttpClientModule } from '@angular/common/http';
import { EventsReducer } from './reducers/events.reducer';
import { EventsEffects } from './effects/event.effects';


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
    LocationValidator
  ],
  imports: [
    BrowserModule, // Browser specific services.
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({ events: EventsReducer }),
    EffectsModule.forRoot([EventsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
  ],
  providers: [
    EventsService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolverService,
    EventsResolver,
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
export class AppModule { }

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

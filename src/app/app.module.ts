import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ToastrService } from "./common/toastr.service";
import { ErrorComponent } from "./errors/error.component";

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventsListComponent,
  EventResolverService,
  EventsService
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";

import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";

@NgModule({
  declarations: [
    /**
     * Which components belong to this module have to
     * be declared in this array. Only takes in declarables
     * and declareables are components, pipes and directives.
     */
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, // Browser specific services.
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    ToastrService,
    EventResolverService,
    EventRouteActivator,
    { provide: "canDeactivateChecker", useValue: checkValueIsDirty }
  ],
  bootstrap: [EventsAppComponent]
})

/**
 * Every application has at least one Angular module,
 * the root module that you bootstrap to launch the
 * application. By convention, it is usually called
 * AppModule.
 */
export class AppModule {}

export function checkValueIsDirty(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      " There are unsaved changes do you wish to continue?"
    );
  return true;
}

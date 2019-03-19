import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

import { ISession, EventsService } from '../events';

@Component({
  selector: "nav-bar",
  templateUrl: "navbar.component.html",
  styles: [`
    div >ul >li > a.active {
      color: #f97294;
    }
    #idWelcome span {
      color: red;
      margin-left: 20px;
    }

    a:hover {
      color: crimson;
      text-decoration: overline;
    }
  `],
})

/**
 * Navigation component.
 */
export class NavBarComponent {
  searchTerm: string = "";
  public sessionsFound: [];

  searchSessions(searchTerm: string){
    this.eventService.searchSessions(searchTerm).subscribe( (sessionFound: any) => {
      this.sessionsFound = sessionFound;
    });

    console.log(this.sessionsFound);
  }

  protected isSearchTermValid(): boolean {
    return this.searchTerm.length > 0;
  }
  public constructor(
    public authService: AuthService,
    private eventService: EventsService) {
    console.log(" Navbar - constructor called. ");
  }
}

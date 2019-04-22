import { Component, OnInit } from "@angular/core";
import { AuthService } from './user/auth.service';

@Component({
  selector: "events-app",
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: [
    "styles.css",
  ],
})
export class EventsAppComponent implements OnInit {
  constructor(private authService:AuthService){
  }

  ngOnInit() {
    this.authService.getStatus();
  }
}

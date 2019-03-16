import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html",
  styles: [`
    a {
      cursor: pointer;
    }
  `],
})

export class SessionListComponent {
  @Input() sessions: ISession[];
  constructor() {
    console.log(" Session List component.");
  }
}

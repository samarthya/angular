import { Component, Input } from '@angular/core';
import { ISession } from '../shared';
import { DropWellComponent} from "../../common/drop-well.component";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html",
  styles: [`
    a {
      cursor: pointer;
    }
    [well-title] {
      display: inline;
    }
  `],
})

export class SessionListComponent {
  @Input() sessions: ISession[];
  constructor() {
    console.log(" Session List component.");
  }
}

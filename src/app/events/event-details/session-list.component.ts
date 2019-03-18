import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';


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

export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  public visibleSession: ISession[] = [];

  constructor() {
    console.log(" Session List component.");
  }

  ngOnChanges() {
    console.log(' NgOnChanges called');
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'votes' ? this.visibleSession.sort(this.sortByVotes): this.visibleSession.sort(this.sortByName);
    }
  }

  /**
   * Sorts the session by votes.
   */
  private sortByVotes(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }

  private sortByName(s1: ISession, s2: ISession) {
    if(s1.name < s2.name){
      return -1;
    } else if(s1.name > s2.name){
      return 1;
    } else if(s1.name === s2.name){
      return 0;
    }
  }

  private filterSessions(filterSessionBy: string){
    console.log( ' Filter -> : ' + filterSessionBy);
    if(filterSessionBy === 'all') {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions.filter( s => {
        console.log(' Session: ' + s.level.toLocaleLowerCase() );
        return s.level.toLocaleLowerCase() === filterSessionBy.toString().trim();
      });
    }
  }
}

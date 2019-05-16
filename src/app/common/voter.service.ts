import { Injectable } from '@angular/core';
import { ISession } from '../events';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {

  constructor (private http: HttpClient) {

  }

  public userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some( voter => voter === userName);
  }

  /**
   * Deletes the voter information from the session.
   */
  public deleteVoter(eventId: number, session: ISession, userName: string): boolean {
    session.voters = session.voters.filter( voter => voter !== userName );

    let url = `/api/vote/${eventId}/sessions/${session.id}/voters/${userName}`

    this.http.delete(url).
      pipe(catchError(this.handleError<any>('deleteVoter'))).subscribe();
    return true;
  }

  public addVoter(eventId: number, session: ISession, userName: string): boolean {
    session.voters.push(userName);
    let options: any = {header: new HttpHeaders({'Content-Type': 'application/json'})};
    let url = `/api/vote/${eventId}/sessions/${session.id}/voters/${userName}`

    this.http.post(url, {}, options).
    pipe(catchError(this.handleError<any>('addVoter'))).subscribe();
    return true;
  }

  private handleError<T> (operation ='Operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

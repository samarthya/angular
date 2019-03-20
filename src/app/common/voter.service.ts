import { Injectable } from '@angular/core';
import { ISession } from '../events';

@Injectable()
export class VoterService {

  public userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some( voter => voter === userName);
  }

  public deleteVoter(session: ISession, userName: string): boolean {
    session.voters = session.voters.filter( voter => voter !== userName );
    return true;
  }

  public addVoter(session: ISession, userName: string): boolean {
    session.voters.push(userName);
    return true;
  }
}

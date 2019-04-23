import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  constructor(private http: HttpClient) {

  }

  private getApplicationJsonHeader(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  private getBasicHeader(userName: string, password: string) {
    let authorizationData = 'Basic ' + btoa(userName + ':' + password);

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData
      })
    };

  }


  /**
   * LoginUser: Logs in the user based on the credentials supplied.
   */
  public loginUser(userName: string, password: string) {
    return this.http.post('/api/login', {}, this.getBasicHeader(userName, password)).pipe(tap((user: any) => {
      this.currentUser = <IUser>user;
    })).pipe(catchError(err => {
      return of(false);
    }));
  }

  public getStatus() {
    this.http.get<IUser>('/api/status').pipe(tap( data => {
      this.currentUser = <IUser> data;
    })).subscribe();
  }

  public isAuthenticated() {
    return !!this.currentUser;
  }

  /**
   * Update: Updates the first or the last name whatever has been changed.
   */
  public updateProfile(firstName: string, lastName: string) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    /** If the first name has been changed. */
    if(firstName!== this.currentUser.firstName){
      this.currentUser.firstName = firstName;
    }

    /**
     * If the last name has been changed.
     */
    if(lastName !== this.currentUser.lastName) {
      this.currentUser.lastName = lastName;
    }

    return this.http.post('/api/update', this.currentUser , options).pipe(tap((user: any) => {
      this.currentUser = <IUser> user;
    })).pipe(catchError(err => {
      return of(false);
    }));
  }


  /**
   * Logout: Calls the server logout to clear the authentication credentials.
   */
  public logout() {

    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get('/api/clean',options).pipe(tap((info: any) => {
      console.log(' Logged out. '+  info);
      this.currentUser = undefined;
    }));
  }
}

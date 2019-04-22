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

  public loginUser(userName: string, password: string) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(userName + ':' + password)
      })
    };

    return this.http.post('/api/login', options).pipe(tap((user: any) => {
      this.currentUser = <IUser>user;
      // this.currentUser = {
      //   id: 1,
      //   userName: user.userName,
      //   lastName: user.lastName,
      //   firstName: user.firstName,
      // };
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

  public updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

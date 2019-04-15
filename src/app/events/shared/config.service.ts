import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigurationService {
  private configURL: string = "assets/config/config.json";

  constructor(private http: HttpClient) {

  }

  public getConfig() {
    return this.http.get(this.configURL);
  }
}

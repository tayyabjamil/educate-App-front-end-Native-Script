import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private serverUrl = "https://0a0c71b8.ngrok.io";

  constructor(private http: HttpClient) { }

  getQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/queries', { headers: headers });
  }
  
  login(user) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/login', { email: user.email, password: user.pass }, { headers: headers });
  }

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      // "AuthKey": "my-key",
      // "AuthToken": "my-token",
      "Content-Type": "application/json",
    });

    return headers;
  }

}

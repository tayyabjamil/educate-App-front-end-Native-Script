import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = "https://dff79727.ngrok.io";

  constructor(private http: HttpClient) { }

  getQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/queries', { headers: headers });
  }
  
  login(user) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/login', { email: user.email, password: user.password, userType: user.userType}, { headers: headers });
  }

  createProfile() {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createProfile', 
    {
      // first_name=test&last_name=test&username=test+&email=test6&password=password&university=test+&deparment=test+&semester=test&userType=student
       first_name: 'test',
       last_name: 'test',
       username: 'test12',
       email: 'test1@gmail',
       password: 'test',
       university: 'test',
       deparment: 'test',
       semester: 'test',
       userType: 'test'
      }, { headers: headers });
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

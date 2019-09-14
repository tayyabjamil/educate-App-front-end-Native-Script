import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = "https://e63effe3.ngrok.io";
  
  constructor(private http: HttpClient) { }
 
  getQueries() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl + '/api/queries', { headers: headers });
  }

  login(user) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/login', { email: user.email, password: user.password, userType: user.userType }, { headers: headers });
  }

  createProfile(newUser) {
    let headers = this.createRequestHeader();
    return this.http.post(this.serverUrl + '/api/createProfile',
      {
first_name: newUser.first_name,
        last_name: newUser.last_name,
        user_name: newUser.user_name,
        contact: newUser.contact,
        email: newUser.email,
        password: newUser.password,
        university: newUser.university,
        department: newUser.department,
        semester: newUser.semester,
        adress: newUser.adress,
        userType: newUser.userType
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

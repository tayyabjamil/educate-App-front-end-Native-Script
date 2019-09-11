import { Injectable } from '@angular/core';
import { setBoolean, clear } from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

 setLoggedIn() {
   setBoolean('userLoggedIn', true);
 }

 removeLoggedIn() {
   clear();
 }

}

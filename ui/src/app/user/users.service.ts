import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private url = 'http://127.0.0.1:5011/users';     // localhost
  private url = 'http://54.226.205.228:5011/users';

  constructor(private httpClient: HttpClient) { }

  // get all users
  getAllUsers(){
    return this.httpClient.get(this.url);
  }

  // get user by username
  getUserByUsername(username: string) {
    return this.httpClient.get(this.url + "/" + username);
  }

  // get user by email
  getUserByEmail(email: string) {
    return this.httpClient.get(this.url + "?" + "email=" + email);
  }
}

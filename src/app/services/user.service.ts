import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  // add user (PUT method on server)
  public addUser(user:any) {
    return this.http.post(`${baseUrl}/user/`, user);
  }

  //remove user (DELETE method on Server)
  public removeUser(user:any){
    return this.http.delete(`${baseUrl}`,user)
  }


}

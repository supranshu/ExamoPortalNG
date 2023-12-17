import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  //generate token
  public generateToken(loginData:any){
 
    return this.http.post(`${baseUrl}/generate-token`,loginData);

  }

  //login user: set Token in local storage
  public loginUser(token: any,user:any){
    localStorage.setItem("token",token);
    localStorage.setItem("user",user)
    return true
  }

  //check if user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("user")
    if(tokenStr==undefined || tokenStr== '' || tokenStr==null){
      return false

    }
    else{
      return true
    }
  }

  //if user will logout remove token
  public logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return true
    
  }

  //to get the token from localstorage

  public getToken(){
    
    return localStorage.getItem("token")
  }

  //set userdetails
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user))
  }
  public getUser(loginData:any){
    
    return this.http.get(`${baseUrl}/user/${loginData.username}`,loginData.username)
}

  

}

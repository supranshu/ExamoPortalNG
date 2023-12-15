import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private snack:MatSnackBar,private login:LoginService){}
  public loginData={
    username: '',
    password: ''

  };
  formSubmit(){
    console.log("login button clicked")
    if(this.loginData.username.trim()==''|| this.loginData.username.trim()==null && this.loginData.password.trim()=='' || this.loginData.password.trim()==null ){
      this.snack.open("Fill all the form Fields",'',{
        duration:3000,
      });
      return
    }

    //request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        

        //login... 
        this.login.loginUser(data.token)
        this.login.setUser(this.loginData)
        
        //redirect ADMIN to Admin and NORMAL to normal
        // if(this.login.getUserRole()=='ADMIN'){
        //   //admin dashboard
        //   window.location.href="/admin"
        // }else if(this.login.getUserRole()=='NORMAL'){
        //   //user dashboard
        //   window.location.href="/user-dashboard" 
        // }
        // else{
        //   this.login.logout();
           
           
        // }

        this.login.getUser(this.loginData).subscribe(
          (data:any)=>{
           
            if(data.authorities[0].authority=='ADMIN'){
              window.location.href="/admin"
            }
            else if(data.authorities[0].authority=='NORMAL'){
              window.location.href="/user-dashboard"
            }
            else{ 
              this.login.logout();
              
            }
          }
        )

 
      },
      (error)=>{
        this.snack.open("Invalid Details!! Try Again",'',{
          duration: 3000
        })
      }
    );
  }
  public loggedInData(){
    return this.loginData
  }
  
}


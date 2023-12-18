import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}
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
        this.login.loginUser(data.token,this.loginData)
        this.login.setUser(this.loginData)
        

        this.login.getUser(this.loginData).subscribe(
          (data:any)=>{
           
            if(data.authorities[0].authority=='ADMIN'){
              this.router.navigateByUrl('/admin')
            }
            else if(data.authorities[0].authority=='NORMAL'){
              this.router.navigateByUrl('user-dashboard')
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


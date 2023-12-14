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
        console.log(data)
      },
      (error)=>{
        console.log("error")
      }
    );
  }
}

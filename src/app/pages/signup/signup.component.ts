import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent 
{


  constructor(private userService:UserService,private snack:MatSnackBar){

  }
 

  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  formSubmit(){
    if(this.user.username=='' || this.user.username==null || this.user.email=='' || this.user.email==null || this.user.firstName=='' || this.user.firstName==null  || this.user.lastName=='' || this.user.lastName==null || this.user.password=='' || this.user.password==null || this.user.phone=='' || this.user.phone==null ){
      this.snack.open("All fields are required!!",'',{duration:3000,}) 
      return;
    }
    // add user functio call from user service
    this.userService.addUser(this.user).subscribe(
      {
        next: (data) => {console.log(data),Swal.fire('Success','Successfully Registered: '+this.user.username,'success')}, 
        error: (err) => this.snack.open('Something went wrong!!','',{duration:3000,}),
        complete: () => console.log("completed")
      }); 
  }

}

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent 
{


  constructor(private userService:UserService){

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
      alert('Fill all the form fields')
      return;
    }
    // add user functio call from user service
    this.userService.addUser(this.user).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => alert("Something wrong happened!!"),
        complete: () => console.log("completed")
      });
  }

}

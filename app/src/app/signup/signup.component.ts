import { Component } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
userData={
  username:'',
  email:'',
  password:''
};
constructor(private signUpService:SignupService){}
onSubmit(){
  this.signUpService.signup(this.userData).forEach((res)=>{
    console.log('signup successful');
    
  })
}
}

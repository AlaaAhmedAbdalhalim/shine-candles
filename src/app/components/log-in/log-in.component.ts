import { Component } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  isFormSubmitted :boolean =false;
  userLoginObj : any =
  {
    email: '',
    password: '',
  }
  constructor (private userAuth :UserAuthService,
              private router : Router
  ){

  }
  signUp(){
    this.router.navigate(['/Signup']);
  }
  login(email:any , password :any){
    this.userAuth.logIn(email,password);
    this.router.navigate(['../Home']);
  }
 
}

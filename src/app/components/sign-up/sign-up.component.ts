
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  isFormSubmitted :boolean =false;
  isUserLogged :boolean;
  userObj : any =
  {
    firstName: '',
    lasstName: '',
    email: '',
    password: '',
    city: '',
    state: ''
  }
  constructor( private userAuth :UserAuthService,
              private router :Router
  ){
    this.isUserLogged=this.userAuth.isUserLogged;
  }
  ngOnInit(): void {
    this.userAuth.currentAuthStatus.subscribe((status: any) => {
      this.isUserLogged = status;
  })
}
  submitForm(form:NgForm){
    this.isFormSubmitted=true;
    this.userAuth.signUp(this.userObj.email,this.userObj.password);
    this.router.navigate(['/Home']);
  }
 
}

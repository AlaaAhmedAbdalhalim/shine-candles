
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  isFormSubmitted :boolean =false;
  userObj : any =
  {
    firstName: '',
    lasstName: '',
    email: '',
    password: '',
    city: '',
    state: ''
  }
  constructor(
    private router :Router
  ){

  }
  submitForm(form:NgForm){
    this.isFormSubmitted=true;
    this.router.navigate(['/Home']);
  
    const formvalue=form.value;
    console.log(formvalue);
  }
 
}

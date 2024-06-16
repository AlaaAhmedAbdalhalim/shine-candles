
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
  /* signupForm: FormGroup; // Declare signupForm property

  constructor ( private router :Router,
    private formBuilder: FormBuilder           
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required], // Add validators if needed
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  SIGNUP(EMAIL:String){
    console.log(EMAIL);
  }
  
  signup() {
    // You can handle form submission logic here
    // For example, navigate to another route
    this.router.navigate(['/Home']);
  }

  onSubmit() {
    // You can handle form submission logic here as well
    // For example, navigate to another route
    this.router.navigate(['/Home']);
  } */
}

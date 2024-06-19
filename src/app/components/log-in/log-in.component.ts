import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  isFormSubmitted :boolean =false;
  isUserLogged :boolean | undefined ;
  userLoginObj : any =
  {
    email: '',
    password: '',
  }
  constructor (private userAuth :UserAuthService,
              private router : Router
  ){}
  ngOnInit(): void {
    this.userAuth.currentAuthStatus.subscribe((status: any) => {
      this.isUserLogged = status;
  })
  }
  login(){
    this.userAuth.logIn();
    this.router.navigate(['../Home']);
  }
  remember()
  {
    this.userAuth.remember(this.userLoginObj.email,this.userLoginObj.password);
  }

 
}

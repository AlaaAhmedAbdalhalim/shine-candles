import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isloggedSubject=new BehaviorSubject <boolean>(false);
  currentAuthStatus = this.isloggedSubject.asObservable();
  constructor() {
  }
  get isUserLogged():boolean
  {
    return localStorage.getItem("userName")?true :false;
  }
  getLoggedStatus(){
    return this.isloggedSubject;
  }
  signUp(userName:string,password:string){
   /*  localStorage.setItem("userName",JSON.stringify(userName));
    localStorage.setItem("password",JSON.stringify(password)); */
    this.isloggedSubject.next(true);
  }
  logIn(){
    this.isloggedSubject.next(true);
  }
  
  remember(userName:string,password:string){
    localStorage.setItem("userName",JSON.stringify(userName));
    localStorage.setItem("password",JSON.stringify(password));
  }
  logOut(){
    alert("are you sure");
    localStorage.removeItem("userName");
  this.isloggedSubject.next(false);
  }
}

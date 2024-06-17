import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isloggedSubject :BehaviorSubject <boolean>;
  constructor() { 
    this.isloggedSubject=new BehaviorSubject <boolean>(false);
  }
  logIn(userName:string,password:string){
    //call login api , and get access token
  localStorage.setItem("userName",userName);
  localStorage.setItem("password",password);
  this.isloggedSubject.next(true);
  }
  logOut(){
    localStorage.removeItem("token");
  this.isloggedSubject.next(false);

  }
  get isUserLogged():boolean
  {
    return (localStorage.getItem("token"))?true :false;
  }
  getLoggedStatus(){
    return this.isloggedSubject;
  }
}

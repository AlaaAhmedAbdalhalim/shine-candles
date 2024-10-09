import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface UserData {
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  state: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private usersData: UserData[] = [];
  private isloggedSubject = new BehaviorSubject<boolean>(false);
  currentAuthStatus = this.isloggedSubject.asObservable();
  private currentUserEmail: string | null = null;

  constructor(private router: Router) {
    const storedUsersData = localStorage.getItem('usersData');
    if (storedUsersData) {
      this.usersData = JSON.parse(storedUsersData);
    }
  }


  saveUserData(userData: UserData): void {
    this.usersData.push(userData);
    console.log('Current users data:', this.usersData); // Debug log
    this.updateLocalStorage();
}
  signUp(userObj: UserData): void {
    const emailExists = this.usersData.some(user => user.email === userObj.email);

    if (emailExists) {
      console.error('Email already exists. Cannot sign up with this email.');
      alert('This email is already registered. Please use a different email.');
    } else {
      this.saveUserData(userObj);
      this.setCurrentUserEmail(userObj.email);
      this.isloggedSubject.next(true);
      this.router.navigate(['../Home']);
    }
  }

  logIn(email: string, password: string): void {

    const userEmail = this.usersData.find(userEmail => userEmail.email === email );
    const userPassword = this.usersData.find(userPassword => userPassword.password === password );
    if (userEmail &&userPassword) {
      this.setCurrentUserEmail(email);
      this.isloggedSubject.next(true);
      this.router.navigate(['../Home']);
    } else if (!userEmail)
      alert('Invalid email . Please try again.');
      else 
        alert ('Invalid Password . Please try again.')
    }
  

  logOut(): void {
    if (this.currentUserEmail) {
      if (confirm('Are you sure you want to log out?')) {
        this.isloggedSubject.next(false);
      }
    } else {
      console.error('No user is currently logged in');
    }
    console.log(this.isloggedSubject)
  }
  get isUserLogged(): boolean {
    return this.isloggedSubject.getValue();
  }
  

  getLoggedStatus() {
    return this.isloggedSubject;
  }
  removeUserByEmail(email: string): void {
    this.usersData = this.usersData.filter(user => user.email !== email);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }

  getAllUsersData(): UserData[] {
    return this.usersData;
  }

  setCurrentUserEmail(email: string | null): void {
    this.currentUserEmail = email;
  }

  getCurrentUserEmail(): string | null {
    return this.currentUserEmail;
  }

 
}

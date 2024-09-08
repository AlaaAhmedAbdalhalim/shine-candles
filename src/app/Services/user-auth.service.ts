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

  constructor( private router : Router) {
    const storedUsersData = localStorage.getItem('usersData');
    if (storedUsersData) {
      this.usersData = JSON.parse(storedUsersData);
    }
  }

  saveUserData(userData: UserData): void {
    this.usersData.push(userData);
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }

  signUp(userObj: UserData): void {
    this.saveUserData(userObj);
    this.setCurrentUserEmail(userObj.email);
    this.isloggedSubject.next(true);
  }

  logIn(email: string): void {

    const user = this.usersData.find(user => user.email === email);
    if (user) {
      this.setCurrentUserEmail(email);
      this.isloggedSubject.next(true);
      this.router.navigate(['../Home']);
    } else {
      console.error('User not found');
    }
  }

  logOut(): void {
    if (this.currentUserEmail) {
      if (confirm('Are you sure you want to log out?')) {
        this.removeUserByEmail(this.currentUserEmail);
        this.setCurrentUserEmail(null);
        this.isloggedSubject.next(false);
      }
    } else {
      console.error('No user is currently logged in');
    }
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

  get isUserLogged(): boolean {
    return this.currentUserEmail !== null;
  }

  getLoggedStatus() {
    return this.isloggedSubject;
  }
}

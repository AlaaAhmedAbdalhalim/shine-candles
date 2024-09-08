import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  users: any[] = [];

  constructor(
    private router: Router,
    private userService: UserAuthService
  ) {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') !) ;
  }
/* 
  viewUserProfile(userId: string) {
    this.router.navigate(['/user-profile', userId]);
  } */
}

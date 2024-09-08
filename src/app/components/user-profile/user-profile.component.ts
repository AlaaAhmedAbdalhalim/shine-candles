import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserAuthService
  ) {}

/*   ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.user = this.userService.getUserData(userId);
    }); */
  }


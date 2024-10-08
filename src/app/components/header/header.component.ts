import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged :boolean;
  userEmail!: string ;

  constructor (private userAuth :UserAuthService){
    this.isUserLogged=this.userAuth.isUserLogged;
  }
  ngOnInit(): void {
    this.userAuth.currentAuthStatus.subscribe((status: any) => {
      this.isUserLogged = status;
      this.userEmail != this.userAuth.getCurrentUserEmail();
  })
}
  logout(){
    this.userAuth.logOut();

   
  }



 
}

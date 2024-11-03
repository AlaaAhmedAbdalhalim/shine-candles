import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrl: './login-alert.component.css',
  animations: [
    trigger('fadeSlide', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ]
})
export class LoginAlertComponent {
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();
  constructor( private router:Router){

  }
  close() {
    this.visible = false;
    this.closed.emit();
  }
  Login(){
    this.router.navigate(['Login']);
  }
}

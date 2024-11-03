import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeSlide', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
    trigger('fadeOverlay', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 0.75 })),
      transition('void <=> *', animate('300ms ease')),
    ]),
  ]
})
export class AppComponent {
  title = 'ShineCandles';

}

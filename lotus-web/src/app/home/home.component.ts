import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('Header', [
      state('start', style({
        opacity: 1
      })),
      transition('void => start', [
        animate('750ms 200ms ease-out', keyframes([
          style({opacity: 0}),
          style({opacity: 1})
        ]))
      ])
    ]),
    trigger('Header2', [
      state('start', style({
        opacity: 1
      })),
      transition('void => start', [
        animate('750ms 500ms ease-out', keyframes([
          style({opacity: 0}),
          style({opacity: 1})
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  state: string = 'start'

  constructor() { }

  ngOnInit() {
  }

}

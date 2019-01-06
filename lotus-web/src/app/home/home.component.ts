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
    trigger('lotusPetal', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal1', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal2', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal3', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal4', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal5', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('lotusPetal6', [
      state('start', style({
        opacity: '1'
      })),
      transition('void => start', [
        animate('5000ms 1000ms', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1})
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

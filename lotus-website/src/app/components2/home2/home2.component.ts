import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
  animations: [
    
  ]
})
export class Home2Component implements OnInit {
  start: boolean = false
  stringInterpolation: string = "TEST"

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }
  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }
}



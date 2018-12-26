import { Component} from '@angular/core';

@Component({
  selector: 'current-time',
  template: `{{ now | date:'h:mm:ss'}}`
})
export class CurrentTimeComponent {
  now: number;

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
}

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

}

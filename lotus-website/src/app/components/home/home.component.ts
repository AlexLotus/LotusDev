import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _name: string = '';

  @Input()
  public set name(val: string) {
    this._name = val;
    this.childFunction();
  }
  public childFunction() {
    if (this._name.length < 1) {
      document.getElementById("blinker").style.display = "inline";
    }
    else {
      document.getElementById("blinker").style.display = "none";
    }
  }

  constructor() { }

  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';
import {AboutDescInt} from './about-desc';

@Component({
  selector: 'app-about-desc',
  templateUrl: './about-desc.component.html',
  styleUrls: ['./about-desc.component.css']
})
export class AboutDescComponent implements OnInit {

  aboutComponents: AboutDescInt[] = [
    {
      'cardNum': 1,
      'header': 'test header',
      'subHeader': 'sub header test',
      'body': 'body',
      'imageUrl': 'https://media.gq.com/photos/55840d6909f0bee56442ede7/master/pass/style-2011-10-lil-wayne-lil-wayne-12.jpg'
    },
    {
      'cardNum': 2,
      'header': 'test header2',
      'subHeader': 'sub header test',
      'body': 'body',
      'imageUrl': 'http://4.bp.blogspot.com/-4WiBdvLwdu4/U0Ve5XRGF5I/AAAAAAAAMVs/vOVwN3RIyq8/s1600/lilwayne1cover.jpg'
    },
    {
      'cardNum': 3,
      'header': 'test header3',
      'subHeader': 'sub header test',
      'body': 'body',
      'imageUrl': 'http://2.bp.blogspot.com/-Z8II1tNyk1g/T88-H9BJQ5I/AAAAAAAAAK4/Hp2Pk4dPAFY/s1600/wiz-khalifa.jpg'
    },
    {
      'cardNum': 4,
      'header': 'test header4',
      'subHeader': 'sub header test',
      'body': 'body',
      'imageUrl': 'http://2.bp.blogspot.com/-6tcaOGQNwac/TfX9y3qYyJI/AAAAAAAAQzk/qS3usWmnXuw/s1600/wiz3.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

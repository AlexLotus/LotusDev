import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

@Component({
    selector: 'lotus-app',
    template: `
    
    <div class="animate">
        <img [@lotusPetal3]='state' src="../../assets/animate/4.png">
        <img [@lotusPetal]='state' src="../../assets/animate/1.png">
        <img [@lotusPetal4]='state' src="../../assets/animate/5.png">

        <img [@lotusPetal1]='state' src="../../assets/animate/2.png">
        <img [@lotusPetal6]='state' src="../../assets/animate/7.png">


        <img [@lotusPetal2]='state' src="../../assets/animate/3.png">
        <img [@lotusPetal5]='state' src="../../assets/animate/6.png">


        
        
        
    </div>
    `,
    styles: ['.animate {width: 300px; height: 300px; } .animate img {width: 300px; position: absolute; opacity: 0; left: 0px;'],
    animations: [
        trigger('lotusPetal1', [
            state('start', style({
                opacity: '1'
            })),
            transition('void => start', [
                animate('1000ms 500ms', keyframes([
                  style({opacity: 0, transform: 'translateY(100px) translateX(150px) rotate(90deg)', offset: 0}),
                  style({opacity: 0, transform: 'translateY(100px) translateX(150px) rotate(90deg)', offset: .20}),
                  style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
                ]))
            ])
        ]),
        trigger('lotusPetal6', [
            state('start', style({
                opacity: '1'
            })),
            transition('void => start', [
                animate('1000ms 500ms', keyframes([
                  style({opacity: 0, transform: 'translateY(100px) translateX(-150px) rotate(-90deg)', offset: 0}),
                  style({opacity: 0, transform: 'translateY(100px) translateX(-150px) rotate(-90deg)', offset: .20}),
                  style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
                ]))
            ])
        ]),
        trigger('lotusPetal5', [
            state('start', style({
                opacity: '1'
            })),
            transition('void => start', [
                animate('1000ms 1000ms', keyframes([
                  style({opacity: 0, transform: 'translateX(-150px) rotate(-90deg)', offset: 0}),
                  style({opacity: 0, transform: 'translateX(-150px) rotate(-90deg)', offset: .20}),
                  style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
                ]))
            ])
        ]),
        trigger('lotusPetal2', [
            state('start', style({
                opacity: '1'
            })),
            transition('void => start', [
                animate('1000ms 1250ms', keyframes([
                  style({opacity: 0, transform: 'translateX(150px) rotate(90deg)', offset: 0}),
                  style({opacity: 0, transform: 'translateX(150px) rotate(90deg)', offset: .20}),
                  style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
                ]))
            ])
        ]),
        trigger('lotusPetal', [
            state('start', style({
              opacity: '1'
            })),
            transition('void => start', [
              animate('1000ms 2250ms', keyframes([
                style({opacity: 0, transform: 'translateY(100px) translateX(100px)', offset: 0}),
                style({opacity: 0, transform: 'translateY(100px) translateX(100px)', offset: .20}),
                style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
              ]))
            ])
          ]),
          trigger('lotusPetal3', [
            state('start', style({
              opacity: '1'
            })),
            transition('void => start', [
              animate('1000ms 1750ms', keyframes([
                style({opacity: 0, transform: 'translateY(100px)', offset: 0}),
                style({opacity: 0, transform: 'translateY(100px)', offset: .20}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1})
              ]))
            ])
          ]),
          trigger('lotusPetal4', [
            state('start', style({
              opacity: '1'
            })),
            transition('void => start', [
              animate('1000ms 2250ms', keyframes([
                style({opacity: 0, transform: 'translateY(100px) translateX(-100px)', offset: 0}),
                style({opacity: 0, transform: 'translateY(100px) translateX(-100px)', offset: .20}),
                style({opacity: 1, transform: 'translateY(0px) translateX(0px)', offset: 1})
              ]))
            ])
          ])
        
    ]
})
export class LotusComponent {
    state: string = 'start'
}

import { Component } from '@angular/core';
import {
  trigger, state, style, animate, transition, query, group
} from '@angular/animations';
@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity:0}),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({opacity :1}),
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FastfoodComponent {

}

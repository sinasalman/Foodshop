import { Component } from '@angular/core';
import { FoodService } from '../services/foods/food.service';
import { food } from '../shared/models/foods';
import {
  trigger, state, style, animate, transition, query, group,sequence
} from '@angular/animations';
@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.scss'],
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
export class TraditionalComponent {
  foods: food[]=[];
  constructor(private foodservice:FoodService  ){}
  ngOnInit(): void {
      this.foods = this.foodservice.getAll();
   
    
   
  }
}

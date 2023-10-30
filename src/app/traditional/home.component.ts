import { Component , OnInit } from '@angular/core';
import { TypesService } from '../services/types.service';
import { types } from '../shared/models/types';
import {
  trigger, state, style, animate, transition, query, group
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity:0}),
        animate(1500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({opacity :1}),
        animate(1500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  typeof : types[]=[];
  constructor(private typesservice :TypesService){}
  ngOnInit():void{
    this.typeof = this.typesservice.typeof();
  }

}

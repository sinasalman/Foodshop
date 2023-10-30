import { Component } from '@angular/core';
import { TypesService } from '../services/types.service';
import { types } from '../shared/models/types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  typeof : types[]=[];
  constructor(private typesservice :TypesService){}
  ngOnInit():void{
    this.typeof = this.typesservice.typeof();
  }

}

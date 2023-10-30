import { Injectable, importProvidersFrom } from '@angular/core';
import { types } from '../shared/models/types';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor() { }
  typeof(): types[] {

      return [
        {
          imgurl : '../../assets/images/types/type-1.jpg',
          name : 'traditional-foods' ,
          route: '/tradition'

        } ,
        {
          imgurl:'../../assets/images/types/type-2.jpg',
          name:'fastfoods',
          route: '/fastfood'
        },
        {
          imgurl:'../../assets/images/types/type-3.jpg',
          name:'deserts',
          route: '/deserts'
        }
      ]
  }
}

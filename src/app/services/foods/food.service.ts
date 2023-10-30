import { Injectable } from '@angular/core';
import { food } from '../../shared/models/foods';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getAll(): food[] {
    return [
      {
        id: 1,
        name: 'chicken kebab',
        price: 115000,
        favorite: true,
        cooktime: '15-20 min',
        imgurl: '../../assets/images/foods/food-1.jpg',
        origin : ['chicken','tomato','rice'],
        add:false
      },
      {
        id: 2,
        name: 'ghorme sabzi',
        price: 85000,
        favorite: false,
        cooktime: '10-15 min',
        imgurl: '../../assets/images/foods/food-2.jpg',
        origin:['beans','vegetebels','meat'],
        add:false
      },
      {
        id: 3,
        name: 'kebab koobide',
        price: 135000,
        favorite: true,
        cooktime: '15-20 min',
        imgurl: '../../assets/images/foods/food-3.jpg',
        origin:['meat','onion','tomato'],
        add:false
      },
      {
        id: 4,
        name: 'fesenjoon',
        price: 110000,
        favorite: true,
        cooktime: '15-20 min',
        imgurl: '../../assets/images/foods/food-4.jpg',
        origin:['meat','walnut','sauce'],
        add:false

      },
      {
        id: 5, 
        name: 'mirzaghasemi',
        price: 75000,
        favorite: false,
        cooktime: '15-20 min',
        imgurl: '../../assets/images/foods/food-5.jpg',
        origin:['Eggplant','tomato','Egg'],
        add:false
        
      },
      {
        id: 6,
        name: 'zereshkpolo ba morgh',
        price: 140000,
        favorite: true,
        cooktime: '15-20 min',
        imgurl: '../../assets/images/foods/food-6.jpg',
        origin:['barbery','chicken','rice'],
        add:false

      }
    ]
  }
  
}

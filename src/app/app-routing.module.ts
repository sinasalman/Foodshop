import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { DesertsComponent } from './deserts/deserts.component';

const routes: Routes = [
  {path:'' , component:HomeComponent,
  data: { animation: 'Home'}},
  {path:'order' , component:OrderComponent},
  {path:'tradition' , component:TraditionalComponent},
  {path:'fastfood' , component:FastfoodComponent},
  {path:'deserts' , component:DesertsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

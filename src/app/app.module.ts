import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { CategoryComponent } from './category/category.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { OrderComponent } from './order/order.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { DesertsComponent } from './deserts/deserts.component';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    OrderComponent,
    TraditionalComponent,
    FastfoodComponent,
    DesertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

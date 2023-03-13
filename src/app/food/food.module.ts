import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FoodListContainerComponent } from './food-list-container/food-list-container.component';
import { FoodListPresentationComponent } from './food-list-container/food-list-presentation/food-list-presentation.component';
import { PizzaListDetailService } from './service/pizza-list-detail.service';


@NgModule({
  declarations: [
    FoodComponent,
    FoodListContainerComponent,
    FoodListPresentationComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  providers:[PizzaListDetailService]
})
export class FoodModule { }

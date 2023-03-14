import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FoodListContainerComponent } from './food-list-container/food-list-container.component';
import { FoodListPresentationComponent } from './food-list-container/food-list-presentation/food-list-presentation.component';
import { PizzaListdetailService } from './service/pizza-list-detail.service';
import { FoodItemContainerComponent } from './food-item-container/food-item-container.component';
import { FoodItemPresentationComponent } from './food-item-container/food-item-presentation/food-item-presentation.component'


@NgModule({
  declarations: [
    FoodComponent,
    FoodListContainerComponent,
    FoodListPresentationComponent,
    FoodItemContainerComponent,
    FoodItemPresentationComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  providers: [PizzaListdetailService]
})
export class FoodModule { }

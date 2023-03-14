import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemContainerComponent } from './food-item-container/food-item-container.component';
import { FoodListContainerComponent } from './food-list-container/food-list-container.component';
import { FoodComponent } from './food.component';

const routes: Routes = [{ path: '', component: FoodComponent ,

children:[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path:'list',
    component:FoodListContainerComponent
  },
  
  // {
  //   path:'detail',
  //   component:FooddetailContainerComponent
  // },
 {
  path:'item/:id',
  component:FoodItemContainerComponent
 }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }

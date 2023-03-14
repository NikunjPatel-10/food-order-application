import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaListdetailService } from '../service/pizza-list-detail.service';

@Component({
  selector: 'app-food-item-container',
  templateUrl: './food-item-container.component.html',
  styleUrls: ['./food-item-container.component.scss']
})
export class FoodItemContainerComponent implements OnInit{
public foodId!:number
public foodDetail$:Observable<any>
constructor(private activateRoute:ActivatedRoute, private pizza_list_detail_service: PizzaListdetailService){
this.foodDetail$ = new Observable()
}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(res=>{
this.foodId = res['id']
    })

this.foodDetail$ = this.pizza_list_detail_service.getPizzaById(this.foodId)
console.log(this.foodDetail$);

  }
}

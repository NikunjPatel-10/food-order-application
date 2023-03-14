import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaListdetailService } from '../service/pizza-list-detail.service';

@Component({
  selector: 'app-food-list-container',
  templateUrl: './food-list-container.component.html',
  styleUrls: ['./food-list-container.component.scss']
})
export class FoodListContainerComponent implements OnInit {
  public pizzaList$: Observable<any>
  constructor(private pizza_list_detail_service: PizzaListdetailService) {
    this.pizzaList$ = new Observable()
  }

  ngOnInit(): void {
    this.pizzaList$ = this.pizza_list_detail_service.getPizzaList()
  }

 
}

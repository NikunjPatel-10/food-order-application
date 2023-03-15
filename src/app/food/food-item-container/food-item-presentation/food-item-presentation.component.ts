import { Component, Input, OnInit } from '@angular/core';
import { FoodItemPresenterService } from '../food-item-presenter/food-item-presenter.service';

@Component({
  selector: 'app-food-item-presentation',
  templateUrl: './food-item-presentation.component.html',
  styleUrls: ['./food-item-presentation.component.scss'],
  viewProviders: [FoodItemPresenterService]
})
export class FoodItemPresentationComponent implements OnInit {
  @Input() set foodDetail(res: any | null) {


    if (res) {
      this._foodDetail = res
    }
  }

  public get foodDetail(): any {
    return this._foodDetail
  }
  private _foodDetail: any

  // public pizzaPrice: any
  // public price = 125;
  // public isActive: boolean;
  // public small?: boolean;
  // public medium?: boolean;
  // public large?: boolean;
  constructor(private _foodItemPresenterService: FoodItemPresenterService) {
    // this.isActive = true
  }

  ngOnInit(): void {
    // this._foodItemPresenterService.pizzaPrice$.subscribe(res => {
    //   this.pizzaPrice = res
      
    // })
    // this.showPrice(1)
  }

  // public showPrice(price: number) {  
  //   this._foodItemPresenterService.showPrice(price,this.small!,this.medium!,this.large!)
  // }
}

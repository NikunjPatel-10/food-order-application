import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item-presentation',
  templateUrl: './food-item-presentation.component.html',
  styleUrls: ['./food-item-presentation.component.scss']
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
  constructor() {

  }

  ngOnInit(): void {

  }
}

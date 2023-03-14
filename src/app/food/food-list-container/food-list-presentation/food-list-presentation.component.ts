import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list-presentation',
  templateUrl: './food-list-presentation.component.html',
  styleUrls: ['./food-list-presentation.component.scss']
})
export class FoodListPresentationComponent implements OnInit {
  @Input() set pizzaList(res: any | null) {
    if (res) {
      this._pizzaList = res
    }
  }

  public get pizzaList(): any {
    return this._pizzaList
  }

  private _pizzaList: any
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  public getFood(id: number) {
    this.router.navigate(['/food/item' , id])
  }
}

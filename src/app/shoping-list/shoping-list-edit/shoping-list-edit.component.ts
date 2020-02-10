import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameinput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountinput', {static: false}) amountInputRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngrident() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngrediantToShopingList(ingredient);
    console.log(this.shoppingListService.getIngredients());
    // this.ingredientAddedEvent.emit(ingredient);
    // const ingredient = new Ingredient(this.nameInputRef.nativeElement.value);
  }
}

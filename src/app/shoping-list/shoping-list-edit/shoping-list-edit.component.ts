import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((id) => {
      this.editMode = true;
      this.editedItemIndex = id;
      this.editedItem = this.shoppingListService.getIngredient(id);
      this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
    });
  }
  // tslint:disable-next-line:no-trailing-whitespace

  onSubmit(form: NgForm) {
    console.log('Reached here');
    const value = form.value;
    if (this.editMode) {
      const ingredient2 = new Ingredient(value.name, value.amount, this.editedItemIndex);
      this.shoppingListService.updateIngredientToShoppingList(ingredient2);
    } else {
      const ingredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngrediantToShopingList(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.shoppingListService.clearShopiingList();
    this.editMode = false;
    this.shoppingListForm.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredientFromShoppingList(this.editedItemIndex);
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

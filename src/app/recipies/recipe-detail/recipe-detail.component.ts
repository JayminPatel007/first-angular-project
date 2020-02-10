import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shoping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientToToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngrediantToShopingList(ingredient);
    }
  }
}

import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients.find((ingredient) => ingredient.id === id );
  }

  addIngrediantToShopingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredientToShoppingList(ingredient: Ingredient) {
   this.ingredients.map((ing) => {
     if (ing.id === ingredient.id) {
       ing.name = ingredient.name;
       ing.amount = ingredient.amount;
     }
   });
   this.ingredientChanged.next(this.ingredients.slice());
  }
  clearShopiingList() {
    this.ingredients = [];
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredientFromShoppingList(id: number) {
    this.ingredients = this.ingredients.filter((ingredient) => {
      return ingredient.id !== id;
    });
    this.ingredientChanged.next(this.ingredients.slice());
  }
}

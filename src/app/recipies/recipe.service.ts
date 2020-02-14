import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shoping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  // tslint:disable-next-line:max-line-length
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [new Recipe('Test Recipe', 'This is simply a test recipe',
    // tslint:disable-next-line:max-line-length
    `https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg`,
    [
      new Ingredient('Buns', 2),
      new Ingredient('Cheese', 1)
    ]),
    new Recipe('Test Recipe 2', 'This is simply a test recipe',
      // tslint:disable-next-line:max-line-length
      `https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg`,
      [
        new Ingredient('Base', 1),
        new Ingredient('Mozrela Cheese', 1)
      ])];
  constructor(private shoppingListService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientListToShopingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
  getRecipeById(id: number) {
    return this.recipes.find((recipe) => {
      return recipe.id === id;
    });
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }
  updateRecipe(id: number, recipe: Recipe) {
    this.recipes.map((reci) => {
      if (reci.id === id) {
        reci.name = recipe.name;
        reci.description = recipe.description;
        reci.imagePath = recipe.imagePath;
        reci.ingredients = recipe.ingredients;
      }
    });
    this.recipesChanged.next(this.recipes);
  }
  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    this.recipesChanged.next(this.recipes.slice());
  }
  setrecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}

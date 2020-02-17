import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipies/recipe.service';
import {Recipe} from '../recipies/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private  recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    console.log('Recipes', this.recipeService.getRecipes());
    return this.http.put('https://ng-recipe-book-3c75c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get<Recipe[]>('https://ng-recipe-book-3c75c.firebaseio.com/recipes.json?auth=' + token)
      .subscribe((response: Recipe[]) => {
      console.log(response);
      this.recipeService.setrecipe(response);
    }, (error) => {
      console.log(error);
    });
  }

}

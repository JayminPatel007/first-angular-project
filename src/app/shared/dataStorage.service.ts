import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipies/recipe.service';
import {Recipe} from '../recipies/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private  recipeService: RecipeService) {}

  storeRecipes() {
    console.log('Recipes', this.recipeService.getRecipes());
    return this.http.put('https://ng-recipe-book-3c75c.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  getRecipes() {
    return this.http.get('https://ng-recipe-book-3c75c.firebaseio.com/recipes.json').subscribe((response: Response) => {
      const data: Recipe[] = [];
      // tslint:disable-next-line:forin
      for (const i in response) {
        data.push(response[i]);
      }
      this.recipeService.setrecipe(data);
    }, (error) => {
      console.log(error);
    });
  }

}

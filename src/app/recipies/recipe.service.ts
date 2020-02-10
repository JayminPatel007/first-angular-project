import {Recipe} from './recipe.model';

export class RecipeService {
  // tslint:disable-next-line:max-line-length
  private recipes: Recipe[] = [new Recipe('Test Recipe', 'This is simply a test recipe',
    // tslint:disable-next-line:max-line-length
    `https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg`),
    new Recipe('Test Recipe 2', 'This is simply a test recipe',
      // tslint:disable-next-line:max-line-length
      `https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg`)];
  getRecipes() {
    return this.recipes.slice();
  }

}

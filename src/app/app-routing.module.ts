import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipies/recipies.component';
import {ShoppingListComponent} from './shoping-list/shoping-list.component';
import {RecipeDetailComponent} from './recipies/recipe-detail/recipe-detail.component';
import {AddRecipeComponent} from './recipies/add-recipe/add-recipe.component';
import {RecipeStartComponent} from './recipies/recipe-start/recipe-start.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'add', component: AddRecipeComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: AddRecipeComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

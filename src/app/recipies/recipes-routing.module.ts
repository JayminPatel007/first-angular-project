import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipies.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipeRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'add', component: AddRecipeComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: AddRecipeComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {
}

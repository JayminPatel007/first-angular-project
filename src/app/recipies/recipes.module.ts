import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipies.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}

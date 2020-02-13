import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListEditComponent } from './shoping-list/shoping-list-edit/shoping-list-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shoping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { AddRecipeComponent } from './recipies/add-recipe/add-recipe.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeService} from './recipies/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShopingListEditComponent,
    DropdownDirective,
    AddRecipeComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShoppingListService} from '../shoping-list/shopping-list.service';
import {RecipeService} from '../recipies/recipe.service';
import {DataStorageService} from '../shared/dataStorage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {
}

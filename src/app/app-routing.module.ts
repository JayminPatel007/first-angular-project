import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shoping-list/shoping-list.component';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

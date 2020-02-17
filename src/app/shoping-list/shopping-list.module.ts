import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shoping-list.component';
import {ShopingListEditComponent} from './shoping-list-edit/shoping-list-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShopingListEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {
}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameinput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountinput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngrident() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.ingredientAddedEvent.emit(ingredient);
    // const ingredient = new Ingredient(this.nameInputRef.nativeElement.value);
  }
}

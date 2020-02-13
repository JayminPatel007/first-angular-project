import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

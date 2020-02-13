import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.editMode = params.id !== undefined;
      console.log(params.id);
      console.log(this.editMode);
    });
  }

}

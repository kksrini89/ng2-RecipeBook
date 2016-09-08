import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives :[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  recipes:Recipe[] = [];
  recipe = new Recipe('Dummy','Dummy','http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}

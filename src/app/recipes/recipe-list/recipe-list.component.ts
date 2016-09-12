import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives :[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  recipes:Recipe[] = [];
  
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}

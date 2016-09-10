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
  
  recipes:Recipe[] = [
    new Recipe('Schnitzel','Very tasty','http://i2.wp.com/jidelna-komarov.cz/wp-content/uploads/2016/03/cropped-Wienerschnitzel.jpg?fit=1640%2C686',[]),
    new Recipe('Summer Salad','Okayish','http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',[])
    ];
  //recipe = new Recipe('Dummy','Dummy','http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}

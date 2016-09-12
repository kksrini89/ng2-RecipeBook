import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes:Recipe[] = [new Recipe('Schnitzel','Very tasty','http://i2.wp.com/jidelna-komarov.cz/wp-content/uploads/2016/03/cropped-Wienerschnitzel.jpg?fit=1640%2C686',[]),
    new Recipe('Summer Salad','Okayish','http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',[])
    ];
  constructor() { }
  
  getRecipes(){
      return this.recipes;
  }

}

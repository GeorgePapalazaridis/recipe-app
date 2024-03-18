import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient, Recipe } from '@recipe-app/dto';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('French Fries', 1, 'unit'),
        new Ingredient('Meat', 2, 'kg'),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'what else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2, 'unit'), new Ingredient('Meat', 1, 'kg')]
    ),
    new Recipe(
      'Big Fat Burger',
      'what else you need to say?',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Buns', 2, 'unit'), new Ingredient('Meat', 1, 'kg')]
    ),
  ];

  constructor(private _shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}

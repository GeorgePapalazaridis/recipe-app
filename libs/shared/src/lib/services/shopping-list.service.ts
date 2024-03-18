import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '@recipe-app/dto';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    // new Ingredient('Apples', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}

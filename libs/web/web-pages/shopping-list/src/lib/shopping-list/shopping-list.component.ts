import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '@recipe-app/dto';

@Component({
  selector: 'recipe-app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingListEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
    // new Ingredient('Potatoes', 15),
    // new Ingredient('Onions', 20),
  ];

  constructor(private _cd: ChangeDetectorRef) {}

  onAddedNewIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this._cd.detectChanges();
  }
}

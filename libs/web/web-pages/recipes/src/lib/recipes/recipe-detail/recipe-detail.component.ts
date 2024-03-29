import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from '@recipe-app/dto';
import { DropdownDirective, RecipeService } from '@recipe-app/shared';

@Component({
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  selector: 'recipe-app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['../recipes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private _recipeService: RecipeService) {}

  onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

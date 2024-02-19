import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from '@recipe-app/dto';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeService } from '@recipe-app/shared';

@Component({
  standalone: true,
  imports: [CommonModule, RecipeItemComponent],
  selector: 'recipe-app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../recipes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    console.log('RecipeListComponent');
    this.recipes = this._recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    this._cd.detectChanges();
  }
}

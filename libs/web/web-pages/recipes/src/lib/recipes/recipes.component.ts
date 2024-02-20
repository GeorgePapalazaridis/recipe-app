import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '@recipe-app/dto';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from '@recipe-app/shared';

@Component({
  selector: 'recipe-app-recipes',
  standalone: true,
  imports: [CommonModule, RecipeListComponent, RecipeDetailComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent implements OnInit {
  recipeSelected!: Recipe;

  constructor(
    private _cd: ChangeDetectorRef,
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this._recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeSelected = recipe;
      this._cd.detectChanges();
    });
  }
}

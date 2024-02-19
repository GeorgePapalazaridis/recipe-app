import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from '@recipe-app/dto';
import { RecipeService } from '@recipe-app/shared';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'recipe-app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['../../recipes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(
    private _cd: ChangeDetectorRef,
    private _recipeService: RecipeService
  ) {}

  onSelected() {
    this._recipeService.recipeSelected.emit(this.recipe);
    this._cd.detectChanges();
  }
}

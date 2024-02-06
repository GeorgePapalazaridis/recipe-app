import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from '@recipe-app/dto';

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
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private _cd: ChangeDetectorRef) {}

  onSelected() {
    this.recipeSelected.emit();
    this._cd.detectChanges();
  }
}

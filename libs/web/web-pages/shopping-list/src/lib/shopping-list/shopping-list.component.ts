import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '@recipe-app/dto';
import { ShoppingListService } from '@recipe-app/shared';

@Component({
  selector: 'recipe-app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingListEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(
    private _cd: ChangeDetectorRef,
    private _shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();

    this._shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        this._cd.detectChanges();
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '@recipe-app/dto';
import { ShoppingListService } from '@recipe-app/shared';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'recipe-app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['../shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListEditComponent implements AfterViewInit {
  // newIngredientName: string = '';
  // newIngredientAmount: number = 0;

  @ViewChild('ingredientNameInput')
  ingredientNameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('ingredientAmountInput')
  ingredientAmountInputRef!: ElementRef;
  @ViewChild('selectedUnit') selectedUnitRef!: ElementRef<HTMLSelectElement>;

  constructor(
    private _cd: ChangeDetectorRef,
    private _shoppingListService: ShoppingListService
  ) {}

  ngAfterViewInit(): void {
    console.log(
      `here it is the unit value: ${this.selectedUnitRef.nativeElement.value}`
    );
  }

  onClearingIngredients() {
    this.ingredientNameInputRef.nativeElement.value = '';
    this.ingredientAmountInputRef.nativeElement.value = '';
    this.selectedUnitRef.nativeElement.value = '';
    this._cd.detectChanges();
  }

  onAddingNewIngredient() {
    const ingredientName = this.ingredientNameInputRef.nativeElement.value;
    const ingredientAmount = this.ingredientAmountInputRef.nativeElement.value;
    const ingredientUnit = this.selectedUnitRef.nativeElement.value;

    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount,
      ingredientUnit
    );
    this._shoppingListService.addNewIngredient(newIngredient);
    this.onClearingIngredients();
    this._cd.detectChanges();
  }
}

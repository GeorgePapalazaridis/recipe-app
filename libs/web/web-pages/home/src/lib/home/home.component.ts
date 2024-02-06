import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@recipe-app/shared';
import { ShoppingListComponent } from '@recipe-app/web/web-pages/shopping-list';
import { RecipesComponent } from '@recipe-app/web/web-pages/recipes';

@Component({
  selector: 'recipe-app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  loadedFeature = 'recipe';

  constructor(private _cd: ChangeDetectorRef) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    this._cd.detectChanges();
  }
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DropdownDirective } from '../../directives';

@Component({
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  selector: 'recipe-app-header',
  templateUrl: './header.component..html',
  styleUrl: './header.component..scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  collapsed = true;
  title = 'recipe-web-app';

  constructor(private _cd: ChangeDetectorRef) {}

  @Output() featureSelected = new EventEmitter<string>();

  onSelected(feature: string) {
    this.featureSelected.emit(feature);
    this._cd.detectChanges();
  }
}

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[recipeAppDropdown]',
  standalone: true,
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}

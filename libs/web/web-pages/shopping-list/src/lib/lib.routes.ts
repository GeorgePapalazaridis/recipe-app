import { Route } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const shoppingListRoutes: Route[] = [
  { path: '', component: ShoppingListComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'shopping-list/:shopping-list-edit',
    component: ShoppingListComponent,
  },
];

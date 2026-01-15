import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    loadChildren: () =>
      import('./features/calculator/calculator.routes').then(m => m.calculatorRoutes)
  }
];

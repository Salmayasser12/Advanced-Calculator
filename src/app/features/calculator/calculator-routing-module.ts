import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator } from './pages/calculator/calculator';
const routes: Routes = [
  { path: '', component: Calculator }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }

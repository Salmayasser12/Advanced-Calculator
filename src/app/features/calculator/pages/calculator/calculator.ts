import { Component, Inject } from '@angular/core';
import { CalculatorEngineService } from '../../services/calculator-engine';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  constructor(public engine: CalculatorEngineService) {}

}

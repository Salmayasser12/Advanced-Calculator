import { TestBed } from '@angular/core/testing';

import { CalculatorEngine } from './calculator-engine';

describe('CalculatorEngine', () => {
  let service: CalculatorEngine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorEngine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

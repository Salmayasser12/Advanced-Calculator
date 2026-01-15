import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculatorEngineService {

  history: string[] = [];
  expression = '';
  private current = '0';
  private operator: string | null = null;
  private operand: number | null = null;
  private memory = 0;

  get display(): string {
    return this.current;
  }

  // ===== Input =====

  input(value: string) {
    if (this.current === '0' && value !== '.') {
      this.current = value;
    } else {
      if (value === '.' && this.current.includes('.')) return;
      this.current += value;
    }
    this.expression += value;

  }

  backspace() {
    if (this.current.length > 1) {
      this.current = this.current.slice(0, -1);
    } else {
      this.current = '0';
    }
    this.expression = this.expression.slice(0, -1);

  }

  clear() {
    this.current = '0';
    this.expression = '';
    this.operator = null;
    this.operand = null;
  }

  // ===== Operators =====

  setOperator(op: string) {
    this.operand = parseFloat(this.current);
    this.operator = op;
    this.expression += ` ${op} `;
    this.current = '0';
  }

  calculate() {
    if (this.operator && this.operand !== null) {
      const a = this.operand;
      const b = parseFloat(this.current);
      let result = 0;

      switch (this.operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : NaN; break;
      }
      const record = `${this.operand} ${this.operator} ${b} = ${result}`;
      this.history.unshift(record);

      this.expression += ` = ${result}`;
      this.current = result.toString();
      this.operator = null;
      this.operand = null;
    }
  }

  // ===== Scientific =====

  sqrt() {
    const value = parseFloat(this.current);
    const result = Math.sqrt(value);
    const record = `√${value} = ${result}`;
    this.history.unshift(record);
    this.expression = record;
    this.current = result.toString();
  }

  square() {
  const value = parseFloat(this.current);
  const result = Math.pow(value, 2);
  const record = `${value}² = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}

inverse() {
  const value = parseFloat(this.current);

  if (value === 0) {
    this.current = 'NaN';
    return;
  }

  const result = 1 / value;
  const record = `1/${value} = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}

percent() {
  const value = parseFloat(this.current);
  const result = value / 100;
  const record = `${value}% = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}


  // ===== Trigonometry =====

sin() {
  const value = parseFloat(this.current);
  const radians = value * Math.PI / 180;
  const result = Math.sin(radians);
  const record = `sin(${value}) = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}

cos() {
  const value = parseFloat(this.current);
  const radians = value * Math.PI / 180;
  const result = Math.cos(radians);
  const record = `cos(${value}) = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}

tan() {
  const value = parseFloat(this.current);
  const radians = value * Math.PI / 180;
  const result = Math.tan(radians);
  const record = `tan(${value}) = ${result}`;

  this.history.unshift(record);
  this.expression = record;
  this.current = result.toString();
}

}

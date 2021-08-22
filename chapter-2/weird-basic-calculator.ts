import { BasicCalculator } from './basic-calculator.interface';

export class WeirdBasicCalculator implements BasicCalculator {
  constructor(
    public readonly manufacturedYear: number,
    public readonly typeOfCalculator: string,
    public readonly ownerName: string = 'weird',
    public calculatedResult: number = 0
  ) {}

  resetResult(): void {
    this.calculatedResult = 0;
  }

  divide(num1: number, num2: number): number {
    if (this.calculatedResult !== 0) {
      this.resetResult();
    }
    this.calculatedResult = num1 / num2 / num1;
    return this.calculatedResult;
  }

  minus(num1: number, num2: number): number {
    if (this.calculatedResult !== 0) {
      this.resetResult();
    }
    this.calculatedResult = num1 - num2 - num1;
    return this.calculatedResult;
  }

  multiple(num1: number, num2: number): number {
    if (this.calculatedResult !== 0) {
      this.resetResult();
    }
    this.calculatedResult = num1 * num2 * num1;
    return this.calculatedResult;
  }

  plus(num1: number, num2: number): number {
    if (this.calculatedResult !== 0) {
      this.resetResult();
    }
    this.calculatedResult = num1 + num2 + num1;
    return this.calculatedResult;
  }
}

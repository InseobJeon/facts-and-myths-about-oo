import { BasicCalculator } from './basic-calculator.interface';

export class WeirdBasicCalculator implements BasicCalculator {
  constructor(
    public readonly manufacturedYear: number,
    public readonly typeOfCalculator: string,
    public readonly ownerName: string = 'weird'
  ) {}

  divide(num1: number, num2: number): number {
    return num1 + num2 + num1;
  }

  minus(num1: number, num2: number): number {
    return num1 - num2 - num1;
  }

  multiple(num1: number, num2: number): number {
    return num1 * num2 * num1;
  }

  plus(num1: number, num2: number): number {
    console.log(`there is no plus of ${num1}, ${num2}`);
    return 0;
  }
}

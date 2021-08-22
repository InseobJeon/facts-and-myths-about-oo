import { BasicCalculator } from './basic-calculator.interface';

export class NormalBasicCalculator implements BasicCalculator {
  constructor(
    public readonly manufacturedYear: number,
    public readonly ownerName: string,
    public readonly typeOfCalculator: string = 'weird',
    public calculatedResult: number = 0
  ) {}

  returnInformationOfCalculator(): void {
    console.log(
      `this calculator type is ${this.typeOfCalculator}, made in ${this.manufacturedYear}, and owner is ${this.ownerName}`
    );
  }

  get result(): number {
    return this.calculatedResult;
  }

  public resetResult(): void {
    this.calculatedResult = 0;
  }

  divide(num1: number, num2: number): number {
    this.calculatedResult = num1 / num2;
    return this.calculatedResult;
  }

  minus(num1: number, num2: number): number {
    this.calculatedResult = num1 - num2;
    return this.calculatedResult;
  }

  multiple(num1: number, num2: number): number {
    this.calculatedResult = num1 * num2;
    return this.calculatedResult;
  }

  plus(num1: number, num2: number): number {
    this.calculatedResult = num1 + num2;
    return this.calculatedResult;
  }
}

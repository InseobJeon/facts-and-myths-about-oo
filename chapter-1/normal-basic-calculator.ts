import { BasicCalculator } from './basic-calculator.interface';

export class NormalBasicCalculator implements BasicCalculator {
  constructor(
    readonly manufacturedYear: number,
    readonly ownerName: string,
    readonly typeOfCalculator: string = 'weird'
  ) {}

  returnInformationOfCalculator(): void {
    console.log(
      `this calculator type is ${this.typeOfCalculator}, made in ${this.manufacturedYear}, and owner is ${this.ownerName}`
    );
  }

  divide(num1: number, num2: number): number {
    return num1 / num2;
  }

  minus(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiple(num1: number, num2: number): number {
    return num1 * num2;
  }

  plus(num1: number, num2: number): number {
    return num1 + num2;
  }
}

import { BasicCalculator } from './basic-calculator.interface';
import { NormalBasicCalculator } from './normal-basic-calculator';
import { WeirdBasicCalculator } from './weird-basic-calculator';

export class Calculator {
  constructor(private readonly calculator: BasicCalculator) {}

  showInformationOfThisCalculator(): void {
    console.log(`
      - type: ${this.calculator.typeOfCalculator}
      - owner's name : ${this.calculator.ownerName}
      - manufactured year : ${this.calculator.manufacturedYear}
    `);
  }

  get currentValue(): number {
    return this.calculator.calculatedResult;
  }

  plusCalculation(num1: number, num2: number): number {
    return this.calculator.plus(num1, num2);
  }

  minusCalculation(num1: number, num2: number): number {
    return this.calculator.minus(num1, num2);
  }

  multipleCalculation(num1: number, num2: number): number {
    return this.calculator.multiple(num1, num2);
  }

  divideCalculation(num1: number, num2: number): number {
    return this.calculator.divide(num1, num2);
  }
}

const normalBasicCalculator = new Calculator(
  new NormalBasicCalculator(2021, 'ivan')
);

const weirdBasicCalculator = new Calculator(
  new WeirdBasicCalculator(2019, 'sergei')
);

normalBasicCalculator.showInformationOfThisCalculator();
console.log(
  `sum of 1 and 2 is: ${normalBasicCalculator.plusCalculation(1, 2)}`
);
normalBasicCalculator.currentValue;

weirdBasicCalculator.showInformationOfThisCalculator();
console.log(`sum of 1 and 2 is: ${weirdBasicCalculator.plusCalculation(1, 2)}`);
weirdBasicCalculator.currentValue;

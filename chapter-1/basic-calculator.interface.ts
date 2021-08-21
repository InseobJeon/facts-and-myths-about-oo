export interface BasicCalculator {
  readonly ownerName: string;
  readonly manufacturedYear: number;
  readonly typeOfCalculator: string;

  plus(num1: number, num2: number): number;
  minus(num1: number, num2: number): number;
  multiple(num1: number, num2: number): number;
  divide(num1: number, num2: number): number;
}

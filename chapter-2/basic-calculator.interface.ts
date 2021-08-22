// 객체를 행동(behavior)기반으로 다시 한 번 바라보자.
// 계산기라는 계산은 사칙연산을 고려한다.
// 내부적으로 돌아가는 method 가 있다면, private 을 사용한다.
// 외부적으로 다른 객체의 조작을 받아야 한다면, public 을 사용한다.
// 변화시킬수 있는 상태를 넣어준다

export interface BasicCalculator {
  readonly ownerName: string;
  readonly manufacturedYear: number;
  readonly typeOfCalculator: string;
  calculatedResult: number;

  plus(num1: number, num2: number): number;
  minus(num1: number, num2: number): number;
  multiple(num1: number, num2: number): number;
  divide(num1: number, num2: number): number;
  resetResult(): void;
}

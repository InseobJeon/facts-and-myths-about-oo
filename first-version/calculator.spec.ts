import { Calculator } from './calculator';

describe('calculator test', () => {
  const calculatorInstance = new Calculator();
  it('should be defined', () => {
    expect(calculatorInstance).toBeDefined();
  });
  it('should plus calculation successfully', () => {
    expect(calculatorInstance.plus(1, 1)).toBe(2);
  });
  it('should minus calculation successfully', () => {
    expect(calculatorInstance.minus(1, 1)).toBe(0);
  });
  it('should multiple calculation successfully', () => {
    expect(calculatorInstance.multiple(1, 2)).toBe(2);
  });
  it('should divide calculation successfully', () => {
    expect(calculatorInstance.divide(1, 2)).toBe(0.5);
  });
});

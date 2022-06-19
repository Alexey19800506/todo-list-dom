import getSum, { calc, getSquaredArray, getOddNumbers, getMinSquaredNumber } from './calculator.js'

it('should get subtraction numbers', () => {
    const result = calc('5 - 3');
    expect(result).toEqual('5 - 3 = 2');
});

it('should get sum numbers', () => {
    const result = calc('8 + 3');
    expect(result).toEqual('8 + 3 = 11');
});

it('should get multiplication numbers', () => {
    const result = calc('5 * 5');
    expect(result).toEqual('5 * 5 = 25');
});

it('should get division numbers', () => {
    const result = calc('15 / 3');
    expect(result).toEqual('15 / 3 = 5');
});


it('should get squared numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
    const result = getSum(4, 5);
    expect(result).toEqual(9);
});


it('should get squared min |number|', () => {
    const result = getMinSquaredNumber([3, -7, 0.19, 22.9, -33.3]);
    expect(result).toEqual(0.0361);
});

it('should get squared min |number|', () => {
    const result = getMinSquaredNumber([-93, -7, 1, -0.2, -33.3]);
    expect(result).toEqual(0.04);
});

it('should get squared min |number|', () => {
    const result = getMinSquaredNumber([-8, 37, 7, 22.9, -33.3, -1]);
    expect(result).toEqual(1);
});
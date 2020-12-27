import getAbsoluteNumbers from './get-absolute-numbers';

import { Code } from '../types/types';

describe('getAbsoluteNumbers', () => {
  it('returns error when numbers parameter is missing', () => {
    expect(() => getAbsoluteNumbers(null as any)).toThrow(Error);
  })

  it('returns error when numbers parameter is too short', () => {
    expect(() => getAbsoluteNumbers([1,2,3] as any)).toThrow(Error);
  })

  it('returns error when numbers parameter contain negative value(s)', () => {
    expect(() => getAbsoluteNumbers(<Code>[5,5,5,-5])).toThrow(Error);
  })

  it('returns correct result for 0000', () => {
    const number: Code = [0,0,0,0];
    const result = getAbsoluteNumbers(number);

    expect(result).toEqual([1,2,3,4]);
  })
  it('returns correct result for 4654', () => {
    const number: Code = [4,6,5,4];
    const result = getAbsoluteNumbers(number);

    expect(result).toEqual([5,2,2,2]);
  })

  it('returns correct result for 9999', () => {
    const number: Code = [9,9,9,9];
    const result = getAbsoluteNumbers(number);

    expect(result).toEqual([0,1,2,3]);
  })
})

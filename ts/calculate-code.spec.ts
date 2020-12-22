import { getExtractedNumbers, getAbsoluteNumbers, getCorrectedNumbers } from './calculate-code';

describe('calculate-code', () => {
  it('return getExtractedNumbers', () => {
    const test = getExtractedNumbers('12344');

    expect(test).toBe(true);
  })

  it('return getAbsoluteNumbers', () => {
    const test = getAbsoluteNumbers([1,2,3,4,4]);

    expect(test).toBe(true);
  })

  it('return getCorrectedNumbers', () => {
    const test = getCorrectedNumbers([1,2,3,4,4]);

    expect(test).toBe(true);
  })
})

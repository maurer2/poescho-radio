import getAbsoluteNumbers from './get-absolute-numbers';

describe('getAbsoluteNumbers', () => {
  it('returns', () => {
    const test = getAbsoluteNumbers([1,2,3,4,4]);

    expect(test).toBe(true);
  })
})

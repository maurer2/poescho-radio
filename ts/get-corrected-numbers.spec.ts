import getCorrectedNumbers from './get-corrected-numbers';

describe('getCorrectedNumbers', () => {
  it('returns', () => {
    const test = getCorrectedNumbers([1,2,3,4,4]);

    expect(test).toBe(true);
  })
})

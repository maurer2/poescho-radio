import getExtractedNumbers from './get-extracted-numbers';

describe('getExtractedNumbers', () => {
  it('return', () => {
    // const test = getExtractedNumbers('');

    expect(() => {
      getExtractedNumbers(null)
    }).toThrow(/number/);

    // expect(test).toThrow('number is empty');

    // expect(test).toBe(true);
  })
})

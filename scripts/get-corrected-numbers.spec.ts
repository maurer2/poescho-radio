import getCorrectedNumbers from './get-corrected-numbers';

import { Code } from '../types/types';

describe.skip('getCorrectedNumbers', () => {
  it('returns', () => {
    const number: Code = [4,6,5,4]
    const test = getCorrectedNumbers(number);

    expect(test).toBe(true);
  })
})

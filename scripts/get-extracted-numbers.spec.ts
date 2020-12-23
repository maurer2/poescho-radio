import getExtractedNumbers from './get-extracted-numbers';

describe('getExtractedNumbers', () => {
  it('returns error when serialNumber is missing', () => {
    expect(() => {
      getExtractedNumbers(null as any)
    }).toThrow(Error);
  })

  it('returns error when serialNumber is undefined', () => {
    expect(() => {
      getExtractedNumbers(undefined as any)
    }).toThrow(Error);
  })

  it('returns error when serialNumber is not a string', () => {
    expect(() => getExtractedNumbers(12345 as any)).toThrow(Error);
    expect(() => getExtractedNumbers([] as any)).toThrow(Error);
    expect(() => getExtractedNumbers({} as any)).toThrow(Error);

    expect(() => getExtractedNumbers('12345')).not.toThrow(Error);
  })

  it('returns error when serialNumber is empty string', () => {
    expect(() => {
      getExtractedNumbers('')
    }).toThrow(Error);
  })

  it('returns error when serialNumber is shorter than 4 characters', () => {
    expect(() => getExtractedNumbers('1')).toThrow(Error);
    expect(() => getExtractedNumbers('12')).toThrow(Error);
    expect(() => getExtractedNumbers('123')).toThrow(Error);

    expect(() => getExtractedNumbers('1234')).not.toThrow(Error);
    expect(() => getExtractedNumbers('12345')).not.toThrow(Error);
    expect(() => getExtractedNumbers('123456')).not.toThrow(Error);
  })

  it('returns error when last 4 entries in serialNumber are not numbers', () => {
    expect(() => getExtractedNumbers('meow')).toThrow(Error);
    expect(() => getExtractedNumbers('meow-meow')).toThrow(Error);
    expect(() => getExtractedNumbers('meow-123')).toThrow(Error);

    expect(() => getExtractedNumbers('meow-1234')).not.toThrow(Error);
    expect(() => getExtractedNumbers('1234')).not.toThrow(Error);
    expect(() => getExtractedNumbers('12345')).not.toThrow(Error);
    expect(() => getExtractedNumbers('123456789')).not.toThrow(Error);
  })

  it('returns correctly extracted numbers', () => {
    expect(getExtractedNumbers('meow-1234')).toEqual([1,2,3,4]);
    expect(getExtractedNumbers('meow-meow-1234')).toEqual([1,2,3,4]);
    expect(getExtractedNumbers('meow-meow-2342341234')).toEqual([1,2,3,4]);

    expect(getExtractedNumbers('1234-54321')).toEqual([4,3,2,1]);
    expect(getExtractedNumbers('1234-5432')).toEqual([5,4,3,2]);
    expect(getExtractedNumbers('12-5432')).toEqual([5,4,3,2]);
  })
})

import extractNumbers from './extract-numbers';

describe('extractNumbers', () => {
  it('returns error when serialNumber is missing', () => {
    expect(() => extractNumbers(null as any)).toThrow(Error);
  })

  it('returns error when serialNumber is undefined', () => {
    expect(() => extractNumbers(undefined as any)).toThrow(Error);
  })

  it('returns error when serialNumber is not a string', () => {
    expect(() => extractNumbers(12345 as any)).toThrow(Error);
    expect(() => extractNumbers([] as any)).toThrow(Error);
    expect(() => extractNumbers({} as any)).toThrow(Error);

    expect(() => extractNumbers('12345')).not.toThrow(Error);
  })

  it('returns error when serialNumber is empty string', () => {
    expect(() => {
      extractNumbers('')
    }).toThrow(Error);
  })

  it('returns error when serialNumber is shorter than 4 characters', () => {
    expect(() => extractNumbers('1')).toThrow(Error);
    expect(() => extractNumbers('12')).toThrow(Error);
    expect(() => extractNumbers('123')).toThrow(Error);

    expect(() => extractNumbers('1234')).not.toThrow(Error);
    expect(() => extractNumbers('12345')).not.toThrow(Error);
    expect(() => extractNumbers('123456')).not.toThrow(Error);
  })

  it('returns error when last 4 entries in serialNumber are not numbers', () => {
    expect(() => extractNumbers('meow')).toThrow(Error);
    expect(() => extractNumbers('meow-meow')).toThrow(Error);
    expect(() => extractNumbers('meow-123')).toThrow(Error);

    expect(() => extractNumbers('meow-1234')).not.toThrow(Error);
    expect(() => extractNumbers('1234')).not.toThrow(Error);
    expect(() => extractNumbers('12345')).not.toThrow(Error);
    expect(() => extractNumbers('123456789')).not.toThrow(Error);
  })

  it('returns correctly extracted numbers', () => {
    expect(extractNumbers('meow-1234')).toEqual([1,2,3,4]);
    expect(extractNumbers('meow-meow-1234')).toEqual([1,2,3,4]);
    expect(extractNumbers('meow-meow-2342341234')).toEqual([1,2,3,4]);

    expect(extractNumbers('1234-54321')).toEqual([4,3,2,1]);
    expect(extractNumbers('1234-5432')).toEqual([5,4,3,2]);
    expect(extractNumbers('12-5432')).toEqual([5,4,3,2]);
  })
})

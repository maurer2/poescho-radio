import { Code } from '../types/types';

export default function getAbsolute(numbers: Code): Code {
  if (numbers == null) {
    throw new Error(`numbers is missing`);
  }

  if (numbers.length < 4) {
    throw new Error('numbers is too short');
  }

  if (numbers.some((number) => Math.sign(number) === -1)) {
    throw new Error('numbers contains negative values');
  }

  const convertedNumbers = <Code>numbers.map((number, index) => {
    let convertedNumber = number + (index + 1);

    if (convertedNumber >= 10) {
      convertedNumber = convertedNumber - 10;
    }

    return convertedNumber
  })

  const convertedNumbersWithCorrection = <Code>convertedNumbers.map((number) => {
    if (number > 6) {
      return number - 6;
    }

    return number
  })

  return convertedNumbersWithCorrection;
}

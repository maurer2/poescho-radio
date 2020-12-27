import { Code } from '../types/types';

export default function extractNumbers(serialNumber: string): Code {
  if (serialNumber == null) {
    throw new Error('serialNumber is missing');
  }

  if (typeof serialNumber !== 'string' ) {
    throw new Error('serialNumber is not a string');
  }

  if (serialNumber.length < 4) {
    throw new Error('serialNumber is too short');
  }

  const extractedLastDigits = serialNumber.slice(-4);

  if (!(extractedLastDigits.match(/^\d+$/))) {
    throw new Error('last 4 entries in serialNumber contains non numeric values');
  }

  const extractedLastDigitsAsArray = extractedLastDigits.split('');
  const parsedNumbersArray = extractedLastDigitsAsArray.map((entry) => parseInt(entry, 10))

  let code: Code = [0,0,0,0]
  for (const [index, value] of parsedNumbersArray.entries()) {
    code[index] = value
  }

  return code;
}

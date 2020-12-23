import { Code } from '../types/types';

export default function getExtractedNumbers(serialNumber: string): Code {
  if (serialNumber == null || serialNumber === '') {
    throw new Error('number is empty');
  }

  if (serialNumber.length < 4) {
    throw 'number is too short';
  }

  const extractedText = serialNumber.slice(-4);
  const splitText = extractedText.split('');
  const convertedNumbers = splitText.map((entry) => parseInt(entry, 10))

  let code: Code;
  for (const [index, value] of convertedNumbers.entries()) {
    code[index] = value
  }

  return code;
}

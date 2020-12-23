export default function getExtractedNumbers(serialNumber: string): number[] {
  if (serialNumber == null || serialNumber === '') {
    throw new Error('number is empty');
  }

  if (serialNumber.length < 4) {
    throw 'number is too short';
  }

  const extractedText = serialNumber.slice(-4);
  const splitText = extractedText.split('');
  const convertedNumbers = splitText.map((entry) => parseInt(entry, 10))

  return convertedNumbers;
}

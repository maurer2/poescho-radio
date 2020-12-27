import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import extractNumbers from './extract-numbers';
import calculateNumbers from './calculate-numbers';

const argumentValues = yargs(hideBin(process.argv)).argv

if ('number' in argumentValues) {
  const serialNumberRaw = argumentValues['number'];
  let serialNumber = serialNumberRaw;

  if (typeof serialNumberRaw === 'boolean') {
    serialNumber = '';
  }

  try {
    const extractedNumber = extractNumbers(String(serialNumber))
    const calculateNumber = calculateNumbers(extractedNumber)

    console.log(`Serial number: ${serialNumber}`);
    console.log(`Calculated code: ${calculateNumber}`);

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
} else {
  console.log(`Error: --number is missing`);
}

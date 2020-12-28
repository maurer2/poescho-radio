import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

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

    console.log(`
      Serial number: ${chalk.green(chalk.bold(serialNumber))}
      Calculated code: ${chalk.magenta(chalk.bold(calculateNumber))}
    `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
} else {
  console.log(`Error: --number is missing`);
}

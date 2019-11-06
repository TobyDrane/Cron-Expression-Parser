/*
* By Toby Drane
*
* A happy Cron:
* (minute)(hour)(day of month)(month)(day of week)(command)
* * = means all possible values
* - = range of time units
* , = comma seperated time units
* / = increments where start is left and right is how much to increment by till max hit
*/
const { aCron } = require('./utils');
const handleType = require('./types');

function parseTime(type, unit) {
  const unitInfo = aCron[type];
  const { lower, max } = unitInfo;
  return handleType(unit, lower, max);
}

// Everything hangs of this
const Parser = {};

Parser.parse = function parse(args) {
  const cron = args[0].split(' ');
  if (cron.length !== 6) {
    throw new Error('Invalid cron format :(');
  }
  const minuteResult = parseTime('minute', cron[0]);
  const hourResult = parseTime('hour', cron[1]);
  const dayOfMonthResult = parseTime('dayOfMonth', cron[2]);
  const monthResult = parseTime('month', cron[3]);
  const dayOfWeekResult = parseTime('dayOfWeek', cron[4]);
  const commandResult = cron[5];

  return {
    minuteResult,
    hourResult,
    dayOfMonthResult,
    monthResult,
    dayOfWeekResult,
    commandResult,
  };
};

// Formats the output correctly
Parser.formatOutput = function formatOutput(obj) {
  const LENGTH = 18;
  // maps the strings to the parser function outputs
  const toRender = [
    { string: 'minute', val: 'minuteResult' },
    { string: 'hour', val: 'hourResult' },
    { string: 'day of month', val: 'dayOfMonthResult' },
    { string: 'month', val: 'monthResult' },
    { string: 'day of week', val: 'dayOfWeekResult' },
    { string: 'command', val: 'commandResult' },
  ];
  let result = '';
  toRender.forEach((item) => {
    const { string, val } = item;
    // padEnd is neat, pads out a string to the desired length above
    const localResult = `${string.padEnd(LENGTH)} ${obj[val]}`;
    result += `${localResult}\n`;
  });
  return result;
};

module.exports = Parser;

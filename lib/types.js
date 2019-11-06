/*
* By Toby Drane
*/
const starParser = require('./parsers/starParser');
const rangeParser = require('./parsers/rangeParser');
const commaParser = require('./parsers/commaParser');
const incrementParser = require('./parsers/incrementParser');

const parsers = [
  starParser,
  rangeParser,
  commaParser,
  incrementParser,
];

function handleType(pattern, lower, max) {
  // eslint-disable-next-line no-restricted-syntax
  for (const parser of parsers) {
    const parserObj = parser(pattern, lower, max);
    if (parserObj.isMatched()) {
      return parserObj.doParser();
    }
  }
  return null;
}

module.exports = handleType;

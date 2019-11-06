/*
* By Toby Drane
*/
const { createRange } = require('../utils');

// Handles -
// Returns all the values that are allowed between the dash
// e.g. 1-5 = 1 2 3 4 5
function rangeParser(pattern, lower, max) {
  // anything with / inbetween numbers
  function isMatched() {
    return /^[0-9]+-[0-9]+$/.test(pattern);
  }

  function doParser() {
    const parts = pattern.split('-');
    const start = parts[0];
    const end = parts[1];

    // Some error checking
    if (!start || !end) throw new Error(`Invalid range format ${pattern}`);
    if (start > end) throw new Error(`Range format is the wrong way round ${pattern}`);
    if (start < lower || end > max) throw new Error(`Check the start and end bounds of the pattern ${pattern}`);

    return createRange(start, end);
  }

  return { isMatched, doParser };
}

module.exports = rangeParser;

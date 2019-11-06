/*
* By Toby Drane
*/
const { createRange } = require('../utils');

// Handles *
// Returns all the possible values for the allowed range
// e.g. * of month = 1 2 3 4 5 6 7 8 9 10 11 12
function starParser(pattern, lower, max) {
  // just a star
  function isMatched() {
    return pattern === '*';
  }

  // create the range
  function doParser() {
    return createRange(lower, max);
  }

  return {
    isMatched,
    doParser,
  };
}

module.exports = starParser;

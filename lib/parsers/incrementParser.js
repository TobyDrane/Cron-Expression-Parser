/*
* By Toby Drane
*/

// Handles /
// Returns incremented values from the defined and start
// e.g. 1/15 0 15 30 ...
function incrementParser(pattern, lower, max) {
  function isMatched() {
    return /^\*|[0-9]+\/[0-9]+$/.test(pattern);
  }

  function doParser() {
    const parts = pattern.split('/');
    let start = parts[0];
    const increment = parts[1];

    // for * we set it to the allowed min
    if (start === '*') start = lower;
    if (start < lower || start > max) throw new Error(`Check the start and end bounds of the pattern ${pattern}`);
    let range = '';
    for (let i = start; i < max; i+=1) {
      if (i % increment === 0) range += ` ${i}`;
    }
    return range;
  }

  return { isMatched, doParser };
}

module.exports = incrementParser;

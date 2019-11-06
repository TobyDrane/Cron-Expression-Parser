/*
* By Toby Drane
*/

// Handles ,
// Returns the values seperated by comman
// e.g. 1,5 = 1 5
function commaParser(pattern, lower, max) {
  // anything with commas
  function isMatched() {
    return /^[0-9]+(,[0-9]+)*$/.test(pattern);
  }

  function doParser() {
    const parts = pattern.split(',');
    let range = '';
    parts.forEach((part) => {
      if (part < lower || part > max) throw new Error(`Invalid range for ${part} in ${pattern}`);
      range += ` ${part}`;
    });

    return range;
  }

  return { isMatched, doParser };
}

module.exports = commaParser;

/*
* By Toby Drane
*/
const aCron = {
  minute: {
    lower: 0,
    max: 59,
  },
  hour: {
    lower: 0,
    max: 24,
  },
  dayOfMonth: {
    lower: 0,
    max: 31,
  },
  month: {
    lower: 0,
    max: 12,
  },
  dayOfWeek: {
    lower: 0,
    max: 7,
  },
};

function createRange(start, end) {
  let values = '';
  for (let range = start; range <= end; range++) {
    values += ` ${range}`;
  }
  return values;
}

module.exports = { aCron, createRange };

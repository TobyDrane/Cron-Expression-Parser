/*
* By Toby Drane
*/
const Parser = require('../lib/parser');

// Tests the cron parser
describe('Test parser', () => {
  describe('comma parser', () => {
    test('should print all values seperated by comma', () => {
      const result = Parser.parse(['1,2,3,4 * * * * /folder/file']);
      const { minuteResult } = result;
      expect(minuteResult).toMatch('1 2 3 4');
    });

    test('throw error for upper bound', () => {
      expect(() => {
        Parser.parse(['101,2 * * * * /folder/file']);
      }).toThrow(Error);
    });
  });

  describe('range parser', () => {
    test('should print range of values', () => {
      const result = Parser.parse(['1-5 * * * * /folder/file']);
      const { minuteResult } = result;
      expect(minuteResult).toMatch('1 2 3 4 5');
    });

    test('if start is greater than end', () => {
      expect(() => {
        Parser.parse(['4-3 * * * * /folder/file']);
      }).toThrow(Error);
    });

    test('if end is less than start', () => {
      expect(() => {
        Parser.parse(['6-5 * * * * /folder/file']);
      }).toThrow(Error);
    });
  });

  describe('star parser', () => {
    test('should print all available values', () => {
      const result = Parser.parse(['* * * * * /folder/file']);
      const { dayOfWeekResult } = result;
      expect(dayOfWeekResult).toMatch('1 2 3 4 5 6 7');
    });
  });

  describe('increment parser', () => {
    test('should print correct increment', () => {
      const result = Parser.parse(['*/15 * * * * /folder/file']);
      const { minuteResult } = result;
      expect(minuteResult).toMatch('0 15 30 45');
    });

    test('test if start is greater than max', () => {
      expect(() => {
        Parser.parse(['60/15 * * * * /folder/file']);
      }).toThrow(Error);
    });
  });
});

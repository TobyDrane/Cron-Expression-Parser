/*
* By Toby Drane
*/
const args = process.argv;
const Parser = require('./lib/parser');

// The cron is wrapped in quotes
const results = Parser.parse(args.slice(2, 3));
const printFormat = Parser.formatOutput(results);
console.log(printFormat);

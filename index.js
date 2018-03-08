const readline = require('readline');

let lines = 0;

/**
 * Proxies console.log
 */
const _log = console.log;
console.log = function (...args){
  logProxy(args);
  _log.apply(this, args);
};

/**
 * Adds logAt to console
 */
console.logAt = logAt;

function getLinesCount(args) {
  const result = args.reduce((res, arg) => res += arg, '');
  return result.split('\n').length;
}

/**
 * A proxy for console.log
 */
function logProxy(args) {
  lines += getLinesCount(args);
}

/**
 * Logs a text at position index
 * @param index
 * @param line
 */
function logAt(index, ...args) {
  let n = lines - index;
  let stdout = process.stdout;
  const linesToLog = args.reduce((res, arg) => res += arg, '').split('\n');

  readline.cursorTo(stdout, 0); // -> left start line
  readline.moveCursor(stdout, 0, -n); // -> go up
  linesToLog.forEach((line, i) => {
    stdout.write(line);
    readline.clearLine(stdout, 1);
    readline.moveCursor(stdout, 0, 1);
    readline.cursorTo(stdout, 0);
  });

  const count = linesToLog.length;

  if(n > count) {
    readline.moveCursor(stdout, 0, n - count);
  } else {
    lines += (count - n);
  }
}

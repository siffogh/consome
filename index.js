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
 * Adds methods to console
 */
console.logLineAt = logLineAt;
console.logLine = logLine;

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
 * Logs a single line
 * @param line
 * @returns {number}
 */
function logLine(line) {
  logLineAt(lines, line);
  return lines - 1;
}

/**
 * Logs a single line at position index
 * @param index
 * @param line
 */
function logLineAt(index, line) {
  let n = lines - index;
  let stdout = process.stdout;
  readline.cursorTo(stdout, 0);
  readline.moveCursor(stdout, 0, -n);
  stdout.write(line);
  readline.clearLine(stdout, 1);
  readline.cursorTo(stdout, 0);

  let newMove;
  if (n > lines || n === 0) {
    lines += n + 1;
    newMove = n + 1;
  } else {
    newMove = n;
  }
  readline.moveCursor(stdout, 0, newMove);
}

/**
 * Logs a text at position index
 * @param index
 * @param line
 */
function logAt(index, ...args) {
  const count = getLinesCount(args);
  let stdout = process.stdout;
  readline.cursorTo(stdout, 0);
  let n = lines - index;
  readline.moveCursor(stdout, 0, -n);
  stdout.write(line);
  readline.clearLine(stdout, 1);
  readline.cursorTo(stdout, 0);

  let newMove;
  if (n > lines || n === 0) {
    lines += n + 1;
    newMove = n + 1;
  } else {
    newMove = n;
  }
  readline.moveCursor(stdout, 0, newMove);
}

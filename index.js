const readline = require('readline');

class Logger {
  constructor(options) {
    this.lines = 0;
    this.log = this.log.bind(this);
    this.logLineAt = this.logLineAt.bind(this);
    this.hackConsole();

    this.hackConsole = this.hackConsole.bind(this);
  }

  hackConsole() {
    this._log = console.log;
    console.log = this.log;
  }

  clear() {
    while (this.lines > 0) {
      readline.clearLine(process.stdout, 0);
      readline.moveCursor(process.stdout, 0, -1);
      this.lines--;
    }

    readline.cursorTo(process.stdout, 0);
  }

  log(...args) {
    const result = args.reduce((res, arg) => res += arg, '');
    this.lines += result.split('\n').length;
    this._log(...args);
  }

  logLine(message) {

  }

  logLineAt(index, msg) {
    let n = this.lines - index;
    let stdout = process.stdout;
    readline.cursorTo(stdout, 0);
    readline.moveCursor(stdout, 0, -n);
    stdout.write(msg);
    readline.clearLine(stdout, 1);
    readline.cursorTo(stdout, 0);

    let newMove;
    if(n > this.lines || n === 0) {
      this.lines += n + 1;
      newMove = n + 1;
    } else {
      newMove = n;
    }
    readline.moveCursor(stdout, 0, newMove);   
  }

}

// Pad a string with spaces on either side
function pad(text, length, align = 'left') {
  let pad = ' '.repeat(length - stringWidth(text));
  if (align === 'right') {
    return pad + text;
  }

  return text + pad;
}

// Count visible characters in a string
function stringWidth(string) {
  return countBreaks(stripAnsi('' + string));
}

module.exports = Logger;
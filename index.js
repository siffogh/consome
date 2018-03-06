const readline = require('readline');


class Logger {
  constructor(options) {
    /**
     * Bind member methods
     */
    this.proxyConsoleLog = this.proxyConsoleLog.bind(this);
    this.log = this.log.bind(this);
    this.logLine = this.logLine.bind(this);
    this.logLineAt = this.logLineAt.bind(this);

    this.lines = 0;
    this.proxyConsoleLog();
  }

  // TODO: add proxy for other console methods
  // TODO: make logLineAt support multiple lines & call it logAt
  // TODO: make logLine support multiple lines & call it log
  proxyConsoleLog() {
    this._log = console.log;
    console.log = this.log;
  }

  /**
   * A proxy for console.log
   */
  log(...args) {
    const result = args.reduce((res, arg) => res += arg, '');
    this.lines += result.split('\n').length;
    this._log(...args);
  }

  /**
   * Logs a single line
   * @param line
   * @returns {number}
   */
  logLine(line) {
    this.logLineAt(this.lines, line);
    return this.lines - 1;
  }

  /**
   * Logs a single line at position index
   * @param index
   * @param line
   */
  logLineAt(index, line) {
    let n = this.lines - index;
    let stdout = process.stdout;
    readline.cursorTo(stdout, 0);
    readline.moveCursor(stdout, 0, -n);
    stdout.write(line);
    readline.clearLine(stdout, 1);
    readline.cursorTo(stdout, 0);

    let newMove;
    if (n > this.lines || n === 0) {
      this.lines += n + 1;
      newMove = n + 1;
    } else {
      newMove = n;
    }
    readline.moveCursor(stdout, 0, newMove);
  }
}

module.exports = Logger;
class Wisdom {
  constructor() {
    this.idx = 0;
    this.str = 'Life is really simple, but we insist on making it complicated.';
    this.strArr = this.str.split(' ');

    this.get = this.get.bind(this);
  }

  get() {
    const words = this.strArr.slice(0, [this.idx + 1]).join(' ');
    this.idx = (this.idx + 1) % this.strArr.length;
    return words;
  }
}


module.exports = new Wisdom();
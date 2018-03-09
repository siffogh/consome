require('consome');

function Loader() {
  const spinner =   '...';
  let idx = 0;

  this.next = () => {
    const spin = spinner.slice(0, idx+1);
    idx = (idx + 1) % spinner.length;
    return spin;
  };
}

const loader = new Loader();
console.clear();
console.log('----- Demo -----');
const loadingLine = console.log('Loading');
setInterval(() => {
  console.logAt(loadingLine, `Loading ${loader.next()}`)
}, 500);
console.log('----- Fin -----');


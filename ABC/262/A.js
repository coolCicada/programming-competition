function Main (input) {
  const string = input.trim();
  let Y = Number(string);
  while (true) {
    if (Y % 4 === 2) return Y;
    Y += 1;
  }
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
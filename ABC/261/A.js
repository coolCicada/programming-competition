function Main (input) {
  const string = input.trim();
  const [a, b, c, d] = string.split(' ').map((item) => Number(item));
  const l = Math.max(a, c);
  const r = Math.min(b, d);
  return r - l > 0 ? r - l : 0;
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
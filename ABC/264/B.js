function Main (input) {
  const string = input.trim();
  let [t, l] = string.split(' ').map((item) => Number(item));
  if (Math.max(Math.abs(8 - t), Math.abs(8 - l)) % 2) return 'black';
  return 'white';
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
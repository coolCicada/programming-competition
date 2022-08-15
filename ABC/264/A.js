function Main (input) {
  const string = input.trim();
  const [l, r] = string.split(' ').map((item) => Number(item));
  let res = '';
  const str = 'atcoder';
  for (let i = 0; i < str.length; i++) {
    if (i >= l - 1 && i <= r - 1) res += str[i];
  }
  return res;
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
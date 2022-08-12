function Main (input) {
  const str = input.trim();
  const arr = str.split('\n');
  const N = arr[0];
  const strArr = arr.slice(1);
  const map = new Map();
  let res = '';
  for (let i = 0; i < N; i++) {
    if (map.has(strArr[i])) {
      res += strArr[i] + '(' + map.get(strArr[i]) + ')';
      map.set(strArr[i], map.get(strArr[i]) + 1);
    } else {
      res += strArr[i];
      map.set(strArr[i], 1);
    }
    res += '\n';
  }
  return res;
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
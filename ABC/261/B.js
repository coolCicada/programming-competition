function Main (input) {
  const string = input.trim();
  const arr = string.split('\n');
  const N = Number(arr[0]);
  const ts = arr.slice(1).map((item) => item.split(''));
  const obj = {
    'W': 'L',
    'L': 'W',
    'D': 'D',
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue
      if (obj[ts[i][j]] !== ts[j][i]) return 'incorrect';
    }
  }
  return 'correct';
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
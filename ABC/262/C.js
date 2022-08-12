function Main (input) {
  const string = input.trim();
  const [N, arrStr] = string.split('\n');
  const arr = arrStr.split(' ').map((item) => Number(item));
  arr.unshift(null);
  let count = 0;
  let t = 0;
  for (let i = 1; i <= N; i++) {
    if (arr[i] === i) t += 1;
    else {
      if (arr[arr[i]] === i) count += 1;
    }
  }
  count /= 2;
  count += t * (t - 1) / 2;
  return count;
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
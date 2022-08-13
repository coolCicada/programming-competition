function Main (input) {
  const string = input.trim();
  const [nStr, arrStr] = string.split('\n');
  const N = Number(nStr);
  const arr = arrStr.split(' ').map((item) => Number(item));
  const tempArr = new Array(N + 1).fill(0);
  let index = 2;
  for (let i = 0; i < arr.length; i++) {
    tempArr[index++] = tempArr[arr[i]] + 1;
  }
  return tempArr[N];
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
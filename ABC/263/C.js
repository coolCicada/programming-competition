function Main (input) {
  const string = input.trim();
  const [N, M] = string.split(' ').map((item) => Number(item));
  const tempArr = [];
  const res = [];
  function dfs(i) {
    if (i > M + 1) return;
    if (tempArr.length === N) {
      return res.push(tempArr.slice().join(' '));
    }
    tempArr.push(i)
    dfs(i + 1);
    tempArr.pop();
    dfs(i + 1);
  }
  dfs(1);
  return res.join('\n');
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
function Solution() {
  let [n, m, t] = cl().split(' ').map((item) => Number(item));
  const arr = cl().split(' ').map((item) => Number(item));
  const arrAdd = new Array(n - 1).fill(0);
  for (let i = 0; i < m; i++) {
    const [x, y] = cl().split(' ').map((item) => Number(item));
    arrAdd[x - 1] = y;
  }
  for (let i = 0; i < n - 1; i++) {
    if (t + arrAdd[i] - arr[i] <= 0) {
      return co('No');
    }
    t = t + arrAdd[i] - arr[i];
  }
  co('Yes');
}

let i = 0;
const lines = []

function cl() { return lines[i++] }
function co(str) { console.log(str)}
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (input) => {
  lines.push(input);
})
rl.on('close', Solution);
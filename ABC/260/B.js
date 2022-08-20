function Solution() {
  const [n, x, y, z] = cl().split(' ').map((item) => Number(item));
  const mathArr = cl().split(' ').map((item) => Number(item));
  const englishArr = cl().split(' ').map((item) => Number(item));
  const arr = new Array(n).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [i + 1, mathArr[i], englishArr[i], mathArr[i] + englishArr[i]];
  }

  const res = [];

  arr.sort((x, y) => y[1] - x[1] !== 0 ? y[1] - x[1] : x[0] - y[0]);
  for (let i = 0; i < x; i++) {
    const curr = arr.shift();
    res.push(curr[0]);
  }

  arr.sort((x, y) => y[2] - x[2] !== 0 ? y[2] - x[2] : x[0] - y[0]);
  for (let i = 0; i < y; i++) {
    const curr = arr.shift();
    res.push(curr[0]);
  }

  arr.sort((x, y) => y[1] + y[2] - x[1] - x[2] !== 0 ? y[1] + y[2] - x[1] - x[2] : x[0] - y[0]);
  for (let i = 0; i < z; i++) {
    const curr = arr.shift();
    res.push(curr[0]);
  }
  res.sort((x, y) => x - y);
  co(res.join('\n'));
}

function cl() {
  return lines.shift();
}

function co(str) {
  console.log(str);
}

const readline = require('readline')
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const lines = []
rl.on('line', (input) => {
  lines.push(input);
})
rl.on('close', Solution);
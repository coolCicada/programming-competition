function Solution() {
  const [n, x, y] = cl().split(' ').map((item) => Number(item));
  const arrR = new Array(n + 1).fill(0);
  const arrB = new Array(n + 1).fill(0);

  arrR[n] = 1;
  arrB[n] = arrR[n] * x;
  for (let i = n - 1; i >= 2; i--) {
    arrR[i] = arrR[i + 1] + arrB[i + 1];
    arrB[i] = arrB[i + 1] * y + arrR[i] * x;
  }

  arrB[1] = arrB[2] ? arrB[2] * y : 0;

  co(arrB[1]);
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
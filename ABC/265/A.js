function Solution() {
  const [x, y, n] = cl().split(' ').map((item) => Number(item));
  if (x * 3 <= y) {
    co(n * x);
  } else {
    co((n / 3 | 0) * y + n % 3 * x);
  }
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
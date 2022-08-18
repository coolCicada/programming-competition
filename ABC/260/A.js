
function Solution() {
  const str = cl();
  const map = new Map();
  for (const s of str) {
    map.set(s, map.has(s) ? map.get(s) + 1: 1);
  }
  for (let [k, v] of map.entries()) {
    if (v === 1) return co(k);
  }
  co(-1);
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
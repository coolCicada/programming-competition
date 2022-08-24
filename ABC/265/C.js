function Solution() {
  const [h, w] = cl().split(' ').map((item) => Number(item));
  const arr = new Array(h).fill(0);

  for (let i = 0; i < h; i++) {
    arr[i] = cl().split('');
  }

  let x = 0, y = 0;
  for (let i = 0; i < h * w + 1; i++) {
    let xx = x, yy = y;
    if (arr[x][y] === 'L') yy--;
    if (arr[x][y] === 'R') yy++;
    if (arr[x][y] === 'U') xx--;
    if (arr[x][y] === 'D') xx++;
    if (xx < 0 || xx >= h || yy < 0 || yy >= w) {
      return co(`${x + 1} ${y + 1}`);
    }
    x = xx, y = yy;
  }
  co(-1);
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
rl.on('line', (input) => lines.push(input));
rl.on('close', Solution);
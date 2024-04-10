function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [n, x] = cin(2);
    const res = new Array(n).fill(0);
    const mid = Math.floor(n / 2);
    if (n % 2 === 0) {
        res[mid] = x + 1;
        res[mid - 1] = x - 1;
        for (let i = mid - 2; i >= 0; i --) {
            res[i] = res[i + 1] - 1;
        }
        for (let i = mid + 1; i < n; i ++) {
            res[i] = res[i - 1] + 1;
        }
    } else {
        res[mid] = x;
        for (let i = mid - 1; i >= 0; i --) {
            res[i] = res[i + 1] - 1;
        }
        for (let i = mid + 1; i < n; i ++) {
            res[i] = res[i - 1] + 1;
        }
    }
    cout(...res);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
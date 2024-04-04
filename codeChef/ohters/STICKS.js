function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const arr = cin(n);
    arr.sort((x, y) => y - x)
    let lines = []
    for (let i = 0; i < n - 1;) {
        if (arr[i] === arr[i + 1]) {
            lines.push(arr[i])
            i += 2
        } else {
            i ++
        }
        if (lines.length === 2) break;
    }
    // console.log(lines)
    if (lines.length === 2) {
        cout(lines[0] * lines[1])
    } else {
        cout(-1)
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
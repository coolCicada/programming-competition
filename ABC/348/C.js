function main() {
    const n = cin();
    const mp = new Map();
    for (let i = 0; i < n; i ++) {
        const [a, c] = cin(2)
        if (mp.has(c)) {
            mp.set(c, Math.min(a, mp.get(c)))
        } else {
            mp.set(c, a)
        }
    }
    const vals = [...mp.values()]
    vals.sort((x, y) => y - x)
    cout(vals[0])
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
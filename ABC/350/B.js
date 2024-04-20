function main() {
    const [n, q] = cin(2)
    const arr = cin(q);
    const cnt = new Array(n).fill(true);
    for (let i = 0; i < q; i ++) {
        cnt[arr[i] - 1] = !cnt[arr[i] - 1]
    }
    let ct = 0
    for (let i = 0; i < n; i ++) {
        if (cnt[i]) ct ++
    }
    cout(ct)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
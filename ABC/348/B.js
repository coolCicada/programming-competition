function main() {
    const n = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = [cin(), cin()]
    }
    const res = new Array(n);
    for (let i = 0; i < n; i ++) {
        let mn = 0
        const [x1, y1] = arr[i]
        for (let j = 0; j < n; j ++) {
            if (i !== j) {
                const [x2, y2] = arr[j]
                const dist = Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2
                // cout(dist, mn)
                if (dist > mn) {
                    mn = dist;
                    res[i] = j + 1
                }
            }
        }
        cout(res[i])
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
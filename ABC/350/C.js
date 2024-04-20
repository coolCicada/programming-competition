function main() {
    const n = cin();
    const arr = cin(n);
    arr.unshift(0);
    let r = []
    for (let i = 1; i <= n; i ++) {
        while (arr[i] !== i) {
            r.push([i, arr[i]])
            let a = i, b = arr[i]
            let t = arr[a]
            arr[a] = arr[b]
            arr[b] = t
        }
    }
    cout(r.length)
    for (let i = 0; i < r.length; i ++) {
        cout(...r[i])
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
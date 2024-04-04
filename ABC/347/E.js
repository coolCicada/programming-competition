function main() {
    const n = cin();
    const q= cin();
    const arr = new Array(q);
    for (let i = 0; i < q; i ++) {
        arr[i] = cin();
    }
    const has = new Array(n + 1).fill(false)
    let cnt = 0
    let res = new Array(n + 1).fill(0);
    let total = 0
    for (let i = 0; i < q; i ++) {
        if (has[arr[i]]) {
            has[arr[i]] = false
            res[arr[i]] += total;
            cnt --
            total += cnt;
        } else {
            res[arr[i]] -= total;
            has[arr[i]] = true
            cnt ++
            total += cnt;
        }
    }
    for (let i = 1; i <= n; i ++) {
        if (has[i]) {
            res[i] += total
        }
    }
    cout(...res.slice(1));
    // for (let i = 1; i <= n; i ++) {
    //     process.stdout.write(`${res[i]} `)
    // }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
function main() {
    let t = cin()
    while (t --) solve ()
}

function solve() {
    const n = cin(), k = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }
    const a = new Array(n);
    const b = new Array(n);
    for (let i = 0; i < n; i ++) {
        a[i] = arr[i] % k
        b[i] = k - arr[i] % k
    }
    for (let i = 1; i < n; i ++) {
        a[i] += a[i - 1]
    }
    for (let i = n - 2; i >= 0; i --) {
        b[i] += b[i + 1]
    }
    let mn = Infinity
    for (let i = 0; i < n; i ++) {
        let pre = a[i]
        let aft = i < n - 1 ? b[i + 1] : 0
        if (aft <= pre) {
            if ((pre - aft) % k < mn) {
                mn = pre - aft
                index = i
            }
        }
    }

    cout(mn)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
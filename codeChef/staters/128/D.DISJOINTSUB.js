function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }
    const isD = new Array(n).fill(false);
    const addN = new Array(n).fill(0)
    for (let i = 1; i < n; i ++) {
        if (arr[i] < arr[i - 1]) {
            isD[i] = true
            if (isD[i - 1]) {
                return cout('No')
            }
            if (i !== n - 1) {
                addN[i] = [arr[i - 1] - arr[i], arr[i + 1] - arr[i]]
                if (arr[i + 1] - arr[i - 1] < 0) {
                    return cout('No')
                } 
            }
            if (i === n - 1) {
                addN[i] = [arr[i - 1] - arr[i], Infinity] 
            }
        }
    }
    let l = 0, r = Infinity
    for (let i = 0; i < n; i ++) {
        if (isD[i]) {
            l = Math.max(addN[i][0], l)
            r = Math.min(r, addN[i][1])
        }
    }
    // console.log(isD, addN)
    // console.log(l, r)
    cout(l <= r ? 'Yes' : 'No')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
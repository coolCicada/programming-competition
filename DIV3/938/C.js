function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [n, k] = cin(2);
    const arr = cin(n);
    const pArr = arr.slice();
    const aArr = arr.slice();
    for (let i = 1; i < n; i ++) {
        pArr[i] += pArr[i - 1];
    }
    for (let i = n - 2; i >= 0; i --) {
        aArr[i] += aArr[i + 1];
    }
    if (k >= pArr[n - 1]) {
        cout(n)
    } else {
        let l = 0, r = n - 1, target = Math.ceil(k / 2);
        while (l < r) {
            const mid = l + ((r - l) >> 1)
            if (pArr[mid] > target) {
                r = mid
            } else {
                l = mid + 1 
            }
        }
        const lAns = l;
        l = 0, r = n - 1, target = Math.floor(k / 2);
        while (l < r) {
            const mid = l + ((r - l + 1) >> 1)
            if (aArr[mid] > target) {
                l = mid
            } else {
                r = mid - 1
            }
        }
        cout(n - Math.max(0, r - lAns + 1));
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
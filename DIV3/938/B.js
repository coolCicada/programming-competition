function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const [n, c, d] = cin(3);
    const map = new Map();
    const arr = cin(n * n);
    let min = arr[0]
    for (let i = 0; i < n * n; i ++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    for (let i = 0; i < n; i ++) {
        let nMin = min + c * i;
        for (let j = 0; j < n; j ++) {
            let r = nMin + d * j;
            map.set(r, (map.get(r) || 0) + 1);
        }
    }
    // console.log(min, arr, set)
    for (let i = 0; i < n * n; i ++) {
        if (!map.has(arr[i]) || map.get(arr[i]) === 0) {
            return cout('NO')
        }
        map.set(arr[i], map.get(arr[i]) - 1)
    }
    cout('YES')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
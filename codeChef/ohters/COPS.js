function main() {
    let t = cin();
    while (t -- ) solve ()
}

function solve() {
    const m = cin(), x = cin(), y = cin();
    const arr = new Array(102).fill(0)
    for (let i = 0; i < m; i ++) {
        const a = cin();
        arr[Math.max(1,  a - x * y)] ++
        arr[Math.min(101, a + x * y + 1)] --
    }
    let p = 0
    let cnt = 0
    for (let i = 1; i <= 100; i ++) {
        p += arr[i]
        if (p === 0) {
            cnt ++
        }
    }
    cout(cnt);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    let n = cin();
    let mp = new Map();
    for (let i = 0; i < n; i ++) {
        let a = cin()
        mp.set(a, mp.has(a) ? mp.get(a) + 1 : 1);
    }
    let cnt = 0
    for (const a of mp.values()) {
        cnt += a - 1
    }
    if (cnt % 2 !== 0) cnt ++
    n -= cnt
    cout(n);
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\r\n|\n/), cid=0;
    solve();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}
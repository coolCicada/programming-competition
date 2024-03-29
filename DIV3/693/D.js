function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const arr = new Array(n + 1); for (let i = 1; i <= n; i ++) arr[i] = cin();
    arr[0] = Infinity
    arr.sort((x, y) => y - x);
    let a = 0, b = 0
    for (let i = 1; i <= n; i ++) {
        if (i % 2 === 1) {
            a += arr[i] % 2 === 0 ? arr[i] : 0
        } else {
            b += arr[i] % 2 === 1 ? arr[i] : 0
        }
    }
    if (a > b) {
        cout('Alice')
    } else if (a < b) {
        cout('Bob')
    } else {
        cout('Tie')
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.trim().split(/\s+/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(args.join(' '));
}
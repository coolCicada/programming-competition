function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin(), p = cin(), x = cin(), y = cin();
    const arr = new Array(n); for (let i = 0; i < n; i ++) arr[i] = cin();
    let t = 0
    for (let i = 0; i < p; i ++) {
        t += arr[i] === 0 ? x : y
    }
    cout(t);
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
    process.stdout.write(`${args.join(' ')}
`)
}
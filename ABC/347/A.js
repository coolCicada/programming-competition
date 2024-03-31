function main() {
    const n = cin(), k = cin();
    const res = []
    for (let i = 0; i < n; i ++) {
        const a = cin();
        if (a >= k && a % k === 0) {
            res.push(a / k)
        }
    }
    cout(...res)
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
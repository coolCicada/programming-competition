function main() {
    const n = cin(), m = cin(), k = cin();
    let cnt = 0
    for (let i = 1; i <= n; i ++) {
        let t = 0
        for (let j = 1; j <= k; j ++) {
            t += cin();
        }
        const q = cin();
        if (q <= 10 && t >= m) {
            cnt ++
        }
    }
    cout(cnt);

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
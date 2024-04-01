function main() {
    let t = cin()
    while (t --) solve()
}

function solve () {
    const a = cin(), b = cin(), c = cin(), d = cin(), K = cin();
    let t = Math.abs(a - c) + Math.abs(b - d);
    if (K >= t && (K - t) % 2 === 0) {
        // cout('YES')
        process.stdout.write('YES\n');
    } else {
        // cout('NO')
        process.stdout.write('NO\n');
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
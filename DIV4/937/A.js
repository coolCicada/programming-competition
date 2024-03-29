function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const a = cin(), b = cin(), c = cin();
    if (a < b && b < c) {
        cout('STAIR')
    } else if (a < b && b > c) {
        cout('PEAK')
    } else {
        cout('NONE')
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
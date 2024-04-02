function main() {
    let t = cin();
    while (t --) solve ();
}

function solve() {
    const n = cin();
    const st = new Set();
    for (let i = 0; i < n; i ++) st.add(cin());
    cout(st.size);
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
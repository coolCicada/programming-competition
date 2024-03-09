function solve() {
    const N = cin();
    for (let i = 0; i < N; i ++) {
        const str = cinS();
        let a = 0, b = 0;
        for (const s of str) {
            if (s === 'A') a ++
            else b ++
        }
        console.log(a > b ? 'A' : 'B')
    }
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
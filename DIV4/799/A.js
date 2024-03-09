function solve() {
    const n = cin();
    for (let i = 0; i < n; i ++) {
        const t = cin();
        let r = 0
        for (let j = 0; j < 3; j ++) {
            const other = cin();
            if (other > t) r ++
        }
        cout(r)
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
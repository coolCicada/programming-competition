function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin()
    let a = cinS(), b = cinS(), c = cinS();

    for (let i = 0; i < n; i ++) {
        if (c[i] !== a[i] && c[i] !== b[i]) {

            cout('YES')
            return
        }
    }
    cout('NO')
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\r\n|\n/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(...args);
}
function solve() {
    let N = cin();
    while (N --) {
        main();
    }
}

function main() {
    const n = cin();
    let p = 0
    const arr = new Array(n).fill(0)
    for (let i = 0; i < n; i ++) {
        let cnt = 0;
        const str = cinS();
        for (const s of str) {
            if (s === '1') cnt ++
        }
        arr[i] = cnt;
    }
    
    for (const a of arr) {
        if (a > 0) {
            if (p !== 0 && a !== p) {
                cout('TRIANGLE')
                return
            }
            p = a
        }
    }

    cout('SQUARE')
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
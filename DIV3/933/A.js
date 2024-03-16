function main() {
    let t = cin();
    while (t --) solve() 
}

function solve() {
    const n = cin(), m = cin(), k = cin()
    const nArr = new Array(n)
    for (let i = 0; i < n; i ++) {
        nArr[i] = cin()
    }
    const mArr = new Array(m)
    for (let i = 0; i < m; i ++) {
        mArr[i] = cin()
    }
    let res = 0
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            if (nArr[i] + mArr[j] <= k) res ++
        }
    }
    cout(res)
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
    console.log(...args);
}
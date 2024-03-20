function main() {
    let t = cin()
    while (t --) solve()
}

function solve() {
    const n = cin()
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) arr[i] = cin()

    arr.sort((x, y) => x - y)
    const barr = []
    const carr = []
    for (let i = 0; i < n; i ++) {
        if (arr[i] === arr[0]) barr.push(arr[i])
        else carr.push(arr[i])
    }

    if (carr.length === 0) {
        cout(-1)
        return
    }
    cout(barr.length, carr.length)
    cout(...barr)
    cout(...carr)
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
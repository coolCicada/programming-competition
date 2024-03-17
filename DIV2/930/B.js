function main() {
    let t = cin()
    while (t --) solve()
}

function solve() {
    const n = cin();
    const arr = new Array(2)
    arr[0] = cinS()
    arr[1] = cinS()
    let str = arr[0][0]
    let cnt = 1
    for (let i = 0; i < n; i ++) {
        if (i === n - 1) {
            str += arr[1][n - 1]
            break;
        }
        let a = arr[0][i + 1], b = arr[1][i];
        if (a === b) {
            str += a
            cnt ++
        } else if (b < a) {
            str += arr[1].slice(i);
            break;
        } else if (a < b) {
            str += a
            cnt = 1
        }
    }

    cout(str)
    cout(cnt)
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
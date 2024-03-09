function solve() {
    let n = cin();
    while (n --) main()
}
// 2 + 1 + 2 + 1
// 1 + 2
// 1 1 1 0 0
// 1 1 0 1 1
// 0 1 0 1 1
// 1 0 0 1 1
// 1 1 0 0 0

function main() {
    let n = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = cinS().split('').map(Number);
    }
    let res = 0
    for (let i = 0; i < Math.floor(n / 2); i ++) {
        for (let j = i; j < n - i - 1; j ++) {
            let a = arr[i][j];
            let b = arr[j][n - 1 - i]
            let c = arr[n - 1 - i][n - 1 - j]
            let d = arr[n - 1 - j][i]
            let t = a + b + c + d
            res += Math.min(t, 4 - t);
        }
    }
    cout(res);
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
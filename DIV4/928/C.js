const MAX = 2 * 10**5 + 7
const arr = new Array(MAX).fill(0);

function solve() {
    let N = cin();

    let res = 0
    for (let i = 1; i <= MAX; i ++) {
        res += S(i)
        arr[i] = res
    }

    for (let i = 0; i < N; i ++) {
        let r = cin()
        cout(arr[r]);
    }
}

function S(i) {
    let total = 0
    while (i) {
        total += i % 10
        i = i / 10 | 0
    }
    return total;
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
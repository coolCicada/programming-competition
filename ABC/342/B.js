function solve() {
    const N = cinN();
    const arr = new Array(N)
    for (let i = 0; i < N; i ++) {
        arr[i] = cinN();
    }

    const arrMap = new Array(N);
    for (let i = 0; i < N; i ++) {
        arrMap[arr[i]] = i
    }

    const Q = cinN();
    for (let i = 0; i < Q; i ++) {
        const a = cinN(), b = cinN();
        cout(arrMap[a] < arrMap[b] ? a : b);
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\n/), cid=0;
    solve();
})

function cin() {
    return content[cid++];
}
function cinN() {
    return Number(content[cid++])
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}
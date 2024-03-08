function solve() {
    const mp = new Map();
    let res = 0;

    const N = cin();
    for (let i = 0; i < N; i ++) {
        let a = cin();

        if (a === 0) {
            res += i;
            mp.set(0, mp.has(0) ? mp.get(0) + 1 : 1);
            continue
        }

        for (let j = 2; j * j <= a; j ++) {
            while (a % (j * j) === 0) {
                a /= j * j
            }
        }
        res += mp.has(0) ? mp.get(0) : 0
        res += mp.has(a) ? mp.get(a) : 0
        mp.set(a, mp.has(a) ? mp.get(a) + 1 : 1);
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
    content=inputString.split(/ |\n/), cid=0;
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
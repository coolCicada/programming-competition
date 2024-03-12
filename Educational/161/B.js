function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    let n = cin();
    const N = n + 1
    const mp = new Array(N).fill(0);
    for (let i = 0; i < n;  i++) {
        mp[cin()] ++
    }
    const pMp = new Array(N + 1).fill(0);
    pMp[0] = 0
    for (let i = 1; i < N; i ++) {
        pMp[i] = mp[i - 1] + pMp[i - 1];
    }

    let r = 0
    for (let i = N - 1; i >= 0; i --) {
        if (mp[i] >= 3) {
            r += mp[i] * (mp[i] - 1) * (mp[i] - 2) / 6
        }
        if (mp[i] >= 2) {
            r += mp[i] * (mp[i] - 1) * pMp[i] / 2
        }
    }
    
    cout(r)
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
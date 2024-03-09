function solve() {
   let N = cin();
    while (N --) main()
}

function main() {
    const n = cin();
    const mp = new Map();
    let cnt = 0
    for (let i = 0; i < n; i ++) {
        let curr = cin();
        mp.set(curr, mp.has(curr) ? mp.get(curr) + 1 : 1)
        let t = ((1 << 31) - 1) ^ curr
        if (mp.has(t)) {
            if (mp.get(t) > 0) {
                cnt ++
                mp.set(t, mp.get(t) - 1)
                mp.set(curr, mp.get(curr) - 1);
            }
        }
    }

    cout(n - cnt)
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
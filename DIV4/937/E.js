function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const str = cinS();

    const arr = []
    for (let i = 1; i * i <= n; i ++) {
        if (n % i === 0) {
            arr.push(i)
            arr.push(n / i)
        }
    }
    arr.sort((x, y) => x - y)
    for (let i = 0; i < arr.length; i ++) {
        const curr = arr[i]
        const a = str.slice(0, curr), b = str.slice(str.length - curr);
        // cout(a, b)
        let acnt = 0
        for (let j = 0; j < str.length; j ++) {
            if (str[j] !== a[j % curr]) {
                acnt ++
            }
        }
        if (acnt <= 1) return cout(curr);
        let bcnt = 0 
        for (let j = 0; j < str.length; j ++) {
            if (str[j] !== b[j % curr]) {
                bcnt ++
            }
        }
        if (bcnt <= 1) return cout(curr);
    }
    cout(str.length)
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
    console.log(args.join(' '));
}
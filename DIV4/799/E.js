function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    let l = cin(), k = cin()
    const arr = new Array(l)
    let total = 0
    for (let i = 0; i < l; i ++) {
        arr[i] = cin()
        total += arr[i]
    }

    if (total < k) {
        cout(-1)
        return
    }
    
    let t = 0
    let res = 0
    for (let i = 0, j = 0; i < l; i ++) {
        if (i > 0) t -= arr[i - 1]
        while (j < l && t + arr[j] <= k) {
            t += arr[j ++]
        }
        res = Math.max(res, j - i)
    }
    

    cout(l - res)
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
    console.log(...args);
}
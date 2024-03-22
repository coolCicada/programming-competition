function main() {
    let t = cin();
    while (t --) solve();
}

function solve() {
    const n = cin(), m = cin(), h = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        const curr = new Array(m)
        for (let j = 0; j < m; j ++) {
            curr[j] = cin();
        }
        curr.sort((x, y) => x - y)
        for (let j = 1; j < m; j ++) {
            curr[j] = curr[j - 1] + curr[j]
        }
        arr[i] = curr
    }
    const solveArr = new Array(n);
    for (let i = 0; i < n; i ++) {
        const curr = [0, 0];
        for (let j = 0; j < m; j ++) {
            if (arr[i][j] <= h) {
                curr[1] += arr[i][j]
                curr[0] ++
            } else {
                break;
            }
        }
        solveArr[i] = curr;
    }
    const sortArr = new Array(n);
    for (let i = 0; i < n; i ++) {
        sortArr[i] = i;
    }
    sortArr.sort((x, y) => {
        const xmp = solveArr[x], ymp = solveArr[y]
        if (xmp[0] > ymp[0]) {
            return -1
        } else if (xmp[0] < ymp[0]) {
            return 1;
        } else {
            return xmp[1] < ymp[1] ? -1 : 1;
        }
    });
    for (let i = 0; i < n; i ++) {
        if (sortArr[i] === 0) {
            return cout(i + 1)
        }
    }
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
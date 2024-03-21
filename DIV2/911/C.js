function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const str = cinS()
    const LR = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i ++) {
        LR[i] = [cin(), cin()]
    }

    function dfs(i) {
        if (LR[i][0] === 0 && LR[i][1] === 0) {
            return 0
        }

        let res = Infinity
        if (LR[i][0] !== 0) {
            res = Math.min(res, dfs(LR[i][0]) + (str[i - 1] === 'L' ? 0 : 1));
        }
        if (LR[i][1] !== 0) {
            res = Math.min(res, dfs(LR[i][1]) + (str[i - 1] === 'R' ? 0 : 1))
        }

        return res;
    }
    cout(dfs(1))
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
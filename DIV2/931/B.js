function main() {
    solve()
}

function solve() {
    const t = cin();
    const target = 30
    const dp = new Array(target + 1).fill(Infinity);
    const coins = [1, 3, 6, 10, 15]
    dp[0] = 0
    for (let i = 1; i <= target; i ++) {
        for (let j = 0; j < coins.length; j ++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }
    }
    for (let i = 0; i < t; i ++) {
        const v = cin();
        if (v > 15) {
            cout((v - (v % 15 + 15)) / 15 + dp[v % 15 + 15])
        } else {
            cout(dp[v])
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
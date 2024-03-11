function main() {
    let n = cin();
    const arr = new Array(1e5 + 1).fill(null).map(() => [])
    
    let L = 0
    for (let i = 0; i < n; i ++) {
        const t = cin(), x = cin(), a = cin();
        arr[t] = [x, a];
        L = t
    }
    const dp = new Array(L + 1).fill(null).map(() => new Array(5).fill(-Infinity))
    dp[0][0] = arr[0][0] === 0 ? arr[0][1] : 0;
    for (let i = 1; i <= L; i ++) {
        for (let j = 0; j < 5; j ++) {
            if (j === 0) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j + 1]) + (arr[i][0] === j ? arr[i][1] : 0)
            }
            else if (j === 4) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + (arr[i][0] === j ? arr[i][1] : 0)
                
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]) + (arr[i][0] === j ? arr[i][1] : 0)
            }
        }
        
    }

    let mx = 0
    for (let i = 0; i < 5; i ++) {
        mx = Math.max(dp[L][i], mx)
    }
    cout(mx);

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
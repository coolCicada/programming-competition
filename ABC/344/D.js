function main() {
    const T = cinS();
    const n = cin()
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        const num = cin()
        const a = new Array(num)
        for (let j = 0; j < num; j ++ ){
            const s = cinS();
            a[j] = s
        }
        arr[i] = a;
    }

    const dp = new Array(n + 1).fill(0).map(() => new Array(T.length + 1).fill(Infinity))
    dp[0][0] = 0
    for (let i = 1; i <= n; i ++) {
        const currArr = arr[i - 1]
        for (let j = 0; j < currArr.length; j ++) {
            const currword = currArr[j]
            for (let z = 0; z + currword.length - 1 < T.length; z ++) {
                let flag = true
                for (let x = 0; x < currword.length; x ++ ) {
                    if (T[z + x] !== currword[x]) {
                        flag = false
                        break;
                    }
                }
                dp[i][z + currword.length] = dp[i - 1][z + currword.length]
                if (flag) {
                    dp[i][z + currword.length] = Math.min(dp[i - 1][z] + 1, dp[i][z + currword.length])
                }
            }
        }
    }

    cout(dp[n])
    


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
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

    const dp = new Array(n + 1).fill(Infinity);
    const stack = [[1, 0, -1]];
    while (stack.length) {
        let [i, c, p] = stack[stack.length - 1];
        if (LR[i][0] === 0 && LR[i][1] === 0) {
            dp[i] = 0;
            c = 2
        }
        if (c === 2) {
            stack.pop();
            if (stack.length === 0) break;
            const top = stack[stack.length - 1];
            if (top[1] === 1) {
                dp[p] = Math.min(dp[i] + (str[p - 1] !== 'L'), dp[p]);
            } else if (top[1] === 2) {
                dp[p] = Math.min(dp[i] + (str[p - 1] !== 'R'), dp[p]);
            }
            continue
        }

        if (c === 0) {
            stack[stack.length - 1][1] ++
            if (LR[i][0] !== 0) stack.push([LR[i][0], 0, i]);
        } else if (c === 1) {
            stack[stack.length - 1][1] ++;
            if (LR[i][1] !== 0) stack.push([LR[i][1], 0, i]);
        }
    }
    cout(dp[1]);
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
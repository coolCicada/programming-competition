async function main() {
    let t = cin();
    while (t--) await solve()
}

const N = 3e5 + 1
const L = new Array(N).fill(0)
const R = new Array(N).fill(0)

async function solve() {
    const n = cin();
    const str = cinS()
    const LR = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        L[i] = cin()
        R[i] = cin()
    }

    async function dfs(i) {
        await undefined
        if (L[i] === 0 && R[i] === 0) {
            return 0
        }

        let res = Infinity
        if (L[i] !== 0) {
            res = Math.min(res, await dfs(L[i]) + (str[i - 1] === 'L' ? 0 : 1));
        }
        if (R[i] !== 0) {
            res = Math.min(res, await dfs(R[i]) + (str[i - 1] === 'R' ? 0 : 1))
        }

        return res;
    }
    cout(await dfs(1))
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '',
    content = null,
    cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content = inputString.trim().split(/\s+/), cid = 0;
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
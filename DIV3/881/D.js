async function main() {
    let t = cin();
    while (t--) await solve()
}

async function solve() {
    const n = cin();
    const lines = new Array(n + 1).fill(0).map(() => [])
    for (let i = 0; i < n - 1; i++) {
        const a = cin(),
            b = cin();
        lines[a].push(b)
        lines[b].push(a)
    }
    const cnts = new Array(n + 1).fill(0);

    async function dfs(index, from) {
        await undefined
        let isEnd = true;
        for (let i = 0; i < lines[index].length; i++) {
            if (lines[index][i] !== from) {
                isEnd = false
                cnts[index] += await dfs(lines[index][i], index);
            }
        }
        if (isEnd) cnts[index] = 1;
        return cnts[index]
    }

    await dfs(1, 0);

    const q = cin();
    for (let i = 0; i < q; i++) {
        const a = cin(),
            b = cin();
        cout(cnts[a] * cnts[b]);
    }
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
    console.log(...args);
}
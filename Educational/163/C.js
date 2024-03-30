async function main() {
    let t = cin();
    while (t --) await solve()
}

async function solve() {
    const n = cin();
    const arr = new Array(3);
    arr[1] = ' ' + cinS();
    arr[2] = ' ' + cinS();

    const vis = new Array(3).fill(0).map(() => new Array(n + 1).fill(false));
    vis[1][1] = true;
    let res = false;
    async function dfs(x, y) {
        await undefined
        vis[x][y] = true;
        if (x === 2 && y === n) {
            return res = true;
        }
        const dx = [0, 1, 0, -1]
        const dy = [1, 0, -1, 0]
        for (let i = 0; i < 4; i ++) {
            const nx = x + dx[i]
            let ny = y + dy[i]
            if (nx >= 1 && nx <= 2 && ny >= 1 && ny <= n && !vis[nx][ny]) {
                vis[nx][ny] = true;
                if (arr[nx][ny] === '<') {
                    ny --
                } else {
                    ny ++
                }
                if (!vis[nx][ny]) await dfs(nx, ny)
                vis[nx][ny] = false;
            }
        }
        vis[x][y] = false;
    }
    await dfs(1, 1);
    cout(res ? 'YES' : 'NO')
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
function main() {
    const [h, w] = cin(2);
    const arr = new Array(h + 1).fill(0);
    let x = 1, y = 1
    for (let i = 1; i <= h; i ++) {
        arr[i] = ' ' + cinS();
        for (let j = 1; j <= w; j ++) {
            if (arr[i][j] === 'S') {
                x = i;
                y = j;
            }
        }
    }
    const n = cin();
    const mp = new Map();
    for (let i = 0; i < n; i ++) {
        const [r, c, e] = cin(3);
        mp.set(r * 1000 + c, e)
    }
    let enrg = 0

    let flag = false;
    const vis = new Array(h + 1).fill(0).map(() => new Array(w + 1).fill(false))
    function dfs(x, y) {
        if (mp.has(x * 1000 + y)) {
            enrg = Math.max(enrg, mp.get(x * 1000 + y));
        }
        // console.log(x, y, enrg)
        if (vis[x][y]) return;
        if (arr[x][y] === '#') return;
        if (arr[x][y] === 'T') {
            flag = true;
            return;
        }
        if (enrg === 0) return;
        
        vis[x][y] = true;
        enrg --
        const dx = [0, 1, 0, -1];
        const dy = [1, 0, -1, 0];
        for (let i = 0; i < 4; i ++) {
            const nx = dx[i] + x
            const ny = dy[i] + y
            if (nx >= 1 && nx <= h && ny >= 1 && ny <= w)
                dfs(nx, ny);
        }
        enrg ++
        vis[x][y] = false;
    }
    dfs(x, y);
    cout(flag ? 'Yes' : 'No')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
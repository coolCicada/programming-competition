function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const arr = new Array(n)
    function dfs(v) {
        if (v < 0) return;
        let sq = Math.pow(Math.floor(Math.sqrt(v * 2)), 2);
        let l = sq - v;
        dfs(l - 1);
        while (l <= v) {
            arr[l] = v
            arr[v] = l
            l ++, v --
        } 
    }
    dfs(n - 1);
    cout(...arr);
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
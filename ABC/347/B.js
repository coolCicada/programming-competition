function main() {
    const set = new Set();
    const s = cinS();
    const n = s.length;
    let cnt = 0
    for (let i = 1; i <= n; i ++) {
        for (let j = 0; j + i <= n; j ++) {
            const curr = s.slice(j, j + i)
            if (!set.has(curr)) {
                cnt ++
            }
            set.add(curr)
        }
    }
    cout(cnt);
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
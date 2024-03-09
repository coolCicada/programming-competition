function solve() {
    let n = cin();
    while (n --) main()
}

function main() {
    const n = cin()
    const str = cinS();
    const set = new Set();
    let total = 0
    for (const s of str) {
        if (!set.has(s)) {
            total += 2
        } else {
            total += 1
        }
        set.add(s);
    }
    cout(total)
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\r\n|\n/), cid=0;
    solve();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}
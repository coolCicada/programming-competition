function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    let f = true;
    for (let i = 0; i < n * 2; i += 2) {
        let str = ''
        let flag = f;
        for (let j = 0; j < n * 2; j += 2) {
            if (flag) str += '##'
            else str += '..'
            flag = !flag
        }
        f = !f
        cout(str)
        cout(str)
    }
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
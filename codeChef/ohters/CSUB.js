function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const l = cin();
    const s = cinS();
    let r = 0
    let cnt = 0
    for (let i = 0; i < l; i ++) {
        if (s[i] === '1') {
            cnt ++
            r += cnt
        }
    }
    cout(r)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
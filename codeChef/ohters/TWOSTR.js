function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const x = cinS();
    const y = cinS();
    if (x.length !== y.length) {
        return cout('No')
    }
    for (let i = 0; i < x.length; i ++) {
        if (x[i] === '?' || y[i] === '?') {
            continue
        }
        if (x[i] !== y[i]) {
            return cout('No')
        }
    }
    cout('Yes')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
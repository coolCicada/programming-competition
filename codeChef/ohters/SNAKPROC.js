function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const s = cinS();
    let cnt = 0
    for (let i  = 0; i < n; i ++) {
        if (s[i] === 'H') cnt ++
        if (s[i] === 'T') cnt --
        if (cnt < 0 || cnt > 1) {
            return cout('Invalid')
        }
    }
    if (cnt === 0) cout('Valid')
    else cout('Invalid')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
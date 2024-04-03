function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin(), m = cin();
    const x = cin(), y = cin();
    let r = ''
    for (let i = 0; i < n; i ++) {
        const s = cinS();
        let x1 = 0, y1 = 0
        for (let j = 0; j < s.length; j ++) {
            if (s[j] === 'P') y1 ++
            else if (s[j] === 'F') x1 ++
        }
        if (x1 >= x || (x1 === x - 1 && y1 >= y)) {
            r += '1'
        } else {
            r += '0'
        }
    }
    cout(r);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
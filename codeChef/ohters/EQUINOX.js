function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin(), a = cin(), b = cin();
    let Sarthak = 0, Anuradha = 0
    for (let i = 0; i < n; i ++) {
        const s = cinS();
        if ('EQUINOX'.includes(s[0])) {
            Sarthak += a
        } else {
            Anuradha += b
        }
    }
    if (Sarthak > Anuradha) {
        cout('SARTHAK')
    } else if (Sarthak < Anuradha) {
        cout('ANURADHA')
    } else {
        cout('DRAW')
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
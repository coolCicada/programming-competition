function main() {
    let t = cin();
    while (t --) solve();
}

function solve() {
    let n = cin();
    const s = cinS();
    let a = 0, b = 0, c = 0
    for (let i = 0; i < n; i += 2) {
        if (s[i] == 1 && s[i + 1] == 0) {
            a ++
        }
        if (s[i] == 0 && s[i + 1] == 1) {
            b ++
        }
        if (s[i] == 0 && s[i + 1] == 0) {
            c ++
        }
    }
    // console.log('----')
    // console.log(a, b)
    if (a > 0) {
        n -= a * 2 - 1
    }
    if (b > 0) {
        n -= (b - 1) * 2
    }
    if (a > 1) {
        n ++
    }
    cout(n)
    // console.log('----')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const fArr = new Array(n);
    for (let i = 0; i < n; i ++) {
        fArr[i] = cin();
    }
    let init = 0
    let cnt = 0
    for (let i = 0; i < n; i ++) {
        init += fArr[i]
        if (init === 0) {
            break
        } else {
             init --
            cnt ++
        }
    }
    cout(cnt + init)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
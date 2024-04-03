function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const s = cin();
    const qArr = new Array(s);
    for (let i = 0; i < s; i ++) {
        qArr[i] = cin();
    }
    let t = 0
    for (let i = 0; i < s; i ++) {
        const a = cin();
        for (let j = 0; j < a; j ++) {
            t += cin();
        }
        t -= qArr[i] * (a - 1)
    }
    cout(t)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const arr = new Array(n)
    for (let i = 0; i < n; i ++ ) {
        arr[i] = cin();
    }

    arr.sort((x, y) => x - y)
    cout(arr[0] + arr[1])
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
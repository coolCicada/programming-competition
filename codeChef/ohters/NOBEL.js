function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin(), m = cin();
    const arr = new Array(m).fill(0)
    for (let i = 0; i < n; i ++) {
        arr[cin() - 1] ++
    }
    // cout(arr)
    for (let i = 0; i < m; i ++) {
        if (arr[i] === 0) {
            return cout('Yes')
        }
    }
    cout('No')


}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
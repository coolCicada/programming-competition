function main() {
    const [n, d] = cin(2)
    const arr = cin(n);
    arr.sort((x, y) => x - y) 
    let cnt = 0
    for (let i = 0; i < n - 1;) {
        if (arr[i + 1] - arr[i] <= d) {
            cnt ++
            i += 2
        } else {
            i ++
        }
    }
    cout(cnt);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
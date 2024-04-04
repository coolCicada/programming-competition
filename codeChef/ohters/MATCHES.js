function main() {
    let t = cin();
    const arr = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]
    while (t --) {
        const a = cin(), b = cin();
        let total = a + b
        let r = 0
        while (total) {
            r += arr[total % 10]
            total = Math.floor(total / 10)
        }
        cout(r)
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
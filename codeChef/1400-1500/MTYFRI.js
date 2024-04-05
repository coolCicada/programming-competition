function main() {
    let t = cin(); 
    while (t --) solve ()
}

function solve() {
    const [n, k] = cin(2);
    const arr = cin(n);
    const a = [], b = [];
    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 === 0) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }
    a.sort((x, y) => y - x);
    b.sort((x, y) => x - y);

    let t = k
    let index = 0
    while (t -- && index < a.length && index < b.length) {
        if (a[index] > b[index]) {
            [a[index], b[index]] = [b[index], a[index]]
        } else {
            break;
        }
        index ++
    }

    let at = 0
    for (let i = 0; i < a.length; i ++) {
        at += a[i]
    }
    let bt = 0
    for (let i = 0; i < b.length; i ++) {
        bt += b[i];
    }
    cout(bt > at ? 'YES' : 'NO')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
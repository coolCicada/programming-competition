function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const str = cinS();
    let a = 0, b = 0
    for (let i = 0; i < n; i ++) {
        if (str[i] === '1') a ++
        else b ++
    }
    if (n === 1) return cout('Bob') 
    if (n % 2 === 0) {
        if (Math.max(a, b) - Math.min(a, b) >= 2) {
            cout('Alice')
        } else {
            cout('Bob')
        }
    } else {
        if (Math.max(a, b) - Math.min(a, b) >= 3) {
            cout('Bob')
        } else {
            cout('Alice')
        }
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
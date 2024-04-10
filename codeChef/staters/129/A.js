function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    let a1 = 0
    for (let i = 0; i < n; i ++) {
        a1 += cin();
    }
    let a2 = 0
    for (let i = 0; i < n; i ++) {
        a2 += cin();
    }

    let b1 = 0
    for (let i = 0; i < n; i ++) {
        b1 += cin();
    }
    let b2 = 0;
    for (let i = 0; i < n; i ++) {
        b2 += cin();
    }

    if (a1 > b1 && a2 > b2) {
        cout('A')
    } else if (a1 < b1 && a2 < b2) {
        cout('P')
    } else {
        cout('DRAW')
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
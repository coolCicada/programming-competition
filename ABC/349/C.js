function main() {
    const [S, T] = cinS(2);
    let j = 0;
    for (let i = 0; i < S.length && j < T.length; i ++) {
        if (S[i].toUpperCase() === T[j]) {
            j ++
        }
    }
    if (j === 3) {
        cout('Yes')
    } else if (j === 2 && T[2] === 'X') {
        cout('Yes')
    } else {
        cout('No')
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
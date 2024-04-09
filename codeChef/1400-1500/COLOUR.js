function main() {
    let t = cin();
    while (t -- ) solve ();
}

function solve() {
    const arr = cin(3);
    arr.sort((x, y) => y - x);
    let t = 0
    for(let i = 0; i < 3; i ++) {
        if (arr[i]) {
            t ++
            arr[i] --
        }
    }
    for (let i = 0; i < 3; i ++) {
        for (let j = i + 1; j < 3; j ++) {
            if (arr[i] && arr[j]) {
                t ++
                arr[i] --
                arr[j] --
            }
        }
    }
    cout(t);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
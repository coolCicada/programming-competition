function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [n, k] = cin(2);
    const arr = cin(n);
    const arrCnt = new Array(n);
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > k) arrCnt[i] = Infinity
        else {
            if ((k - arr[i]) % arr[i] === 0) {
                arrCnt[i] = (k - arr[i]) / arr[i]
            } else {
                arrCnt[i] = Infinity
            }
        }
    }
    const indexArr = new Array(n);
    for (let i = 0; i < indexArr.length; i ++) {
        indexArr[i] = i
    }
    indexArr.sort((x, y) => arrCnt[x] - arrCnt[y]);
    if (arrCnt[indexArr[0]] !== Infinity) {
        cout(arr[indexArr[0]])
    } else {
        cout(-1)
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
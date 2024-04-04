function main() {
    let t = cin(); while (t --) solve ()
}

function solve() {
    let [a, b] = cin(2)
    let ai = 0, bi = 0
    let cnt = 0
    while ((a & (a - 1)) !== 0) {
        cnt += 1
        a >>= 1
    }
    for (let i = 0; i < 32; i ++) {
        if (a >> i & 1) {
            ai = i
        }
        if (b >> i & 1) {
            bi = i
        }
    }
    
    cout(Math.abs(ai - bi) + cnt);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
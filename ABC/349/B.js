function main() {
    const str = cinS();
    const arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i ++) {
        arr[str[i].charCodeAt() - 'a'.charCodeAt()] ++
    }
    const mp = new Map();
    for (let i = 0; i < 26; i ++) {
        if (arr[i] > 0) {
            mp.set(arr[i], (mp.get(arr[i]) || 0) + 1)
        }
    }
    for (const v of mp.values()) {
        if (v !== 2) return cout('No')
    }
    cout('Yes')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
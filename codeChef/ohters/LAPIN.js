function main() {
   let t = cin();
   while (t --) solve () 
}

function solve() {
    const s = cinS();
    const mp = new Array(26).fill(0)
    let middle = -1
    if (s.length % 2 === 1) {
        middle = Math.floor(s.length / 2);
    }
    for (let i = 0; i < s.length; i ++) {
        if (i === middle) continue
        mp[s[i].charCodeAt() - 'a'.charCodeAt()] ++
    }
    let cnt = 0
    for (let i = 0; i < 26; i ++) {
        if (mp[i] % 2 !== 0) {
            cnt ++
        }
    }
    if (cnt > 1) {
        cout('NO')
    } else {
        cout('YES')
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const s = cinS();
    const v = '@#%&?';
    if (s.length < 10) return cout('NO');
    const L = s.length;
    let a = 0, b = 0, c = 0, d = 0;
    if (s[0].charCodeAt() >= 'a'.charCodeAt() && s[L - 1].charCodeAt() <= 'z'.charCodeAt()) {
        a ++
    }

    for (let i = 1; i < L - 1; i ++) {
        if (s[i].charCodeAt() >= 'a'.charCodeAt() && s[i].charCodeAt() <= 'z'.charCodeAt()) {
            a ++
        }
        if (s[i].charCodeAt() >= 'A'.charCodeAt() && s[i].charCodeAt() <= 'Z'.charCodeAt()) {
            b ++
        }
        if (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt()) {
            c ++
        }
        if (v.includes(s[i])) d ++
    }
    // cout(a, b, c, d)
    cout(a * b * c * d > 0 ? 'YES' : 'NO')
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
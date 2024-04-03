function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const s = cinS();
    let cnt = 0
    function getD(s) {
        return s === '0' ? '1' : '0'
    }
    for (let i = 0; i < s.length; i ++) {
        const c = cnt % 2 ? getD(s[i]) : s[i];
        if (c === '0') {
            cnt ++
        }
    }
    cout(cnt)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
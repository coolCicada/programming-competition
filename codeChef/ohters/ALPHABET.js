function main() {
    const str = cinS();
    let t = cin();
    while (t --) {
        s()
    }
    function s() {
        const a = cinS();
        for (let i = 0; i < a.length; i ++) {
            let flag = false
            for (let j = 0; j < str.length; j ++) {
                if (a[i] === str[j]) {
                    flag = true
                    break;
                }
            }
            if (!flag) {
                return cout('No')
            }
        }
        cout('Yes')
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
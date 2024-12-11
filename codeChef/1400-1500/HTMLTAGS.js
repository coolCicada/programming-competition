function main() {
    let T = cin();
    while (T --) {
        solve();
    }
}

function solve() {
    const s = cinS();
    if (s[0] !== '<' || s[1] !== '/' || s[s.length - 1] !== '>' || s.length <= 3) {
        cout('Error')
    } else {
        for (let i = 2; i < s.length - 1; i ++) {
            if (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt() || 
        s[i].charCodeAt() >= 'a'.charCodeAt() && s[i].charCodeAt() <= 'z'.charCodeAt()) {
            continue
        } else {
            return cout('Error')
        }
        }
        cout('Success')
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
/**
 * 
 * @param {*} n
 * @returns {string}
 */
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}
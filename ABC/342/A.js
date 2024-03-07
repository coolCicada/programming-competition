function Solution() {
    const str = readline();
    const mp = new Map();
    for (const s of str) {
        mp.set(s, mp.has(s) ? mp.get(s) + 1 : 1)
    }
    // console.log('mp:', mp)
    for (const [k, v] of mp.entries()) {
        if (v === 1) {
            for (let i = 0; i < str.length; i ++) {
                if (str[i] === k) {
                    console.log(i + 1)
                    break;
                }
            }
            return;
        }
    }
}

let i = 0;
const lines = []

function readline() { return lines[i++] }
const readlineM = require('readline')
const rl = readlineM.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', (input) => lines.push(input));
rl.on('close', Solution);
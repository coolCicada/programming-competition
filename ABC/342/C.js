function Solution() {
    const N = Number(readline());
    const str = Array.from(readline());
    
    const Q = Number(readline());
    const arr = new Array(26);
    for (let i = 0; i < 26; i ++ ) {
        arr[i] = i
    }
    for (let i = 0; i < Q; i ++) {
        [from, to] = readline().split(' ');
        for (let i = 0; i < 26; i ++) {
            if (arr[i] === from.charCodeAt() - 'a'.charCodeAt()) {
                arr[i] = to.charCodeAt() - 'a'.charCodeAt();
            }
        }
    }

    for (let i = 0; i < str.length; i ++) {
        str[i] = String.fromCharCode('a'.charCodeAt() + arr[str[i].charCodeAt() - 'a'.charCodeAt()]);
    }
    console.log(str.join(''));
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
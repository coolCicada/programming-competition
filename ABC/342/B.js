function Solution() {
    const N = Number(readline());
    const peoples = readline().split(' ').map((item) => Number(item));
    // console.log('peoples:', peoples);
    const Q = Number(readline())
    for (let i = 0; i < Q; i ++) {
        const [a, b] = readline().split(' ').map(Number);
        for (let j = 0; j < N; j ++) {
            if (peoples[j] === a || peoples[j] === b) {
                console.log(peoples[j])
                break;
            }
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
function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    const arr = []
    for (let i = 0; i < 8; i ++) { 
        arr.push(cinS());
    }
    for (let i = 1; i < 7; i ++) {
        for (let j = 1; j < 7; j ++) {
            if (
                arr[i - 1][j - 1] === '#'
                && arr[i - 1][j + 1] === '#'
                && arr[i + 1][j - 1] === '#'
                && arr[i + 1][j + 1] === '#'
            ) {
                cout(`${i + 1} ${j + 1}`)
                break;
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |[\r\n]+/), cid=0;
    solve();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}
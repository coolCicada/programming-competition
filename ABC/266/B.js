function main() {
    const con = 998244353;
    const n = BigInt(cinS())
    if (n % BigInt(con) >= 0) {
        cout(Number(n % BigInt(con)))
    } else {
        cout(Number(n % BigInt(con) + BigInt(con)))
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\r\n|\n/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(...args);
}
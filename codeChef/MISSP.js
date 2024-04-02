function main() {
    let t = cin();
    
    while (t --) {
        let n = cin();
        let init = 0
        while (n --) {
            init ^= cin()
        }
        cout(init)
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.trim().split(/\s+/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    process.stdout.write(`${args.join(' ')}\n`)
}
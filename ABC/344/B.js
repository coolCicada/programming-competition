function main() {
    const r = cinAll()
    for (let i = r.length - 1; i >= 0; i --) {
        cout(r[i])
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

function cinAll() {
    return content;
}

function cout(...args) {
    console.log(...args);
}
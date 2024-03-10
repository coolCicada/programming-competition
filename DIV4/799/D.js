function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    const str = cinS(), n = cin()
    const [h, m] = str.split(':').map(Number)
    let start = h * 60 + m
    let next = start
    let cnt = 0
    do {
        next += n
        next %= 1440
        if (isP(next)) cnt ++
    } while (next !== start)

    cout(cnt)
    

    function isP(n) {
        const h = n / 60 | 0
        const m = n - h * 60
        const hs = String(h).length === 1 ? '0' + h : '' + h
        const ms = String(m).length === 1 ? '0' + m : '' + m
        return hs.split('').reverse().join('') === ms;
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
    solve();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(...args)
}
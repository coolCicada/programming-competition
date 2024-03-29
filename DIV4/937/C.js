function main() {
    let t = cin();
    while(t --) solve()
}

function solve() {
    const str = cinS();
    let hour = str[0] * 10 + (+str[1])
    if (hour >= 12) {
        if (hour > 12) hour -= 12
        let h = hour < 10 ? '0' + hour : hour;
        cout(h + str.slice(2), 'PM')
    } else {
        if (hour === 0) {
            cout('12' + str.slice(2), 'AM')
        } else {

            cout(str, 'AM')
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
    console.log(args.join(' '));
}
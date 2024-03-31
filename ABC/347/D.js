function main() {
    let a = cin(), b = cin(), c = BigInt(cinS());
    let pcount = 0
    for (let i = 0; i < 61; i ++) {
        if ((c >> BigInt(i)) & 1n) pcount ++
    }
    if ((a + b < pcount)) {
        cout(-1)
    } else {
        let an = 0n, bn = 0n
        if (((a + b) - pcount) % 2 === 0) {
            let lf = ((a + b) - pcount) / 2
            let left = (a + b) - pcount
            if (!(a >= lf && b >= lf)) {
                return cout(-1)
            }
            for (let i = 0; i < 61; i ++) {
                if ((c >> BigInt(i)) & 1n) {
                    if (b > lf) {
                        bn |= 1n << BigInt(i)
                        b --
                    } else {
                        an |= 1n << BigInt(i)
                        a --
                    }
                } else {
                    if (left) {
                        an |= 1n << BigInt(i)
                        bn |= 1n << BigInt(i)
                        left -= 2
                    }
                }
            }
            if (left > 0) {
                cout(-1)
            } else {
                cout(an, bn)
            }
            
        }
        else cout(-1)
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
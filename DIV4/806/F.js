function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    let n = cin()
    const arr = new Array(n + 1);
    for (let i = 1; i <= n; i ++) {
        arr[i] = cin()
    }
    
    const list = new Array()
    for (let i = 1; i <= n; i ++) {
        if (arr[i] < i) {
            list.push(i);
        }
    }

    let res = 0;
    for (let i = 0; i < list.length; i ++) {
        const curr = arr[list[i]];
        let l = 0, r = list.length - 1
        while (l < r) {
            const mid = (l + r) >> 1
            if (list[mid] >= curr) {
                r = mid
            } else {
                l = mid + 1
            }
        }
        
        res += l
    }

    cout(res)
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
    args.forEach((item) => {
        console.log(item);
    })
}
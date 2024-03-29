async function main() {
    let t = cin();

    const nums = []
    for (let i = 0; i < 1 << 6; i ++) {
        let t = 0
        for (let j = 10; j >= 0; j --) {
            t = t * 10 + ((i >> j) & 1)
        }
        nums.push(t);
    }
    const set = new Set();
    for (let i = 1; i < nums.length; i ++) {
        for (let j = 1; j < nums.length; j ++) {
            if (nums[i] * nums[j] > 1e5) break;
            for (let a = 1; a < nums.length; a ++ ) {
                if (nums[i] * nums[j] * nums[a] > 1e5) break;
                for (let b = 1; b < nums.length; b ++) {
                    if (nums[i] * nums[j] * nums[a] * nums[b] > 1e5) break;
                    for (let c = 1; c < nums.length; c ++) {
                        set.add(nums[i] * nums[j] * nums[a] * nums[b] * nums[c])
                    }
                }
            }
        }
    }

    while (t --) {
        if (set.has(cin())) {
            cout('YES')
        } else {
            cout('NO')
        }
    }
}

async function solve () {
    
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
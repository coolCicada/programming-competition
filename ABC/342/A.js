// var input=require("fs").readFileSync("/dev/stdin","utf8");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "", content = null, cid = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    content=inputString.split(/ |\n/), cid=0;
    solve();
})

function solve() {
    const str = cin();
    for (let i = 0; i < str.length; i ++) {
        let flag = true
        for (let j = 0; j < str.length; j ++) {
            if (i !== j && str[j] === str[i]) flag = false
        }
        if (flag) {
            cout(i + 1)
            break;
        }
    }
}

function cin() {
    return content[cid++];
}
function cinN() {
    return Number(content[cid++])
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}
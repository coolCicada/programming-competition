function main() {
    let t = Number(readline())
    while (t --) solve()
}

function solve() {
    const N = Number(readline());
    const d = []
    const c = []
    let n = N;
    while (n --) {
        const a = readline();
        const [x, y] = a.split(' on ');
        d.unshift(x)
        c.unshift(y);
    }
    d.unshift('Begin')
    for (let i = 0; i < N; i ++) {
        console.log(d[i] === 'Right' ? 'Left' : d[i] === 'Left' ? 'Right' : d[i], 'on', c[i])
    }
    console.log()
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

var inputString=''
var currentLine=0

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
    main() 
});

function readline() {
    return inputString[currentLine++];
  }
  
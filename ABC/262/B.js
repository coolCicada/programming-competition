function Main (input) {
  const string = input.trim();
  const arr = string.split('\n').map((item) => item.split(' ').map((item) => Number(item)));
  const [N, M] = arr[0];
  const Vs = new Array(N).fill(0).map(() => new Array(N).fill(false));
  const tups = arr.slice(1);

  for (let i = 0; i < M; i++) {
    const [a, b] = tups[i];
    Vs[a - 1][b - 1] = true;
  }

  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let z = j + 1; z < N; z++) {
        if (Vs[i][j] && Vs[i][z] && Vs[j][z]) count += 1;
      }
    }
  }

  return count;
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
function Main (input) {
  const string = input.trim();
  const a = string.split(' ').map((item) => Number(item));
  a.sort((x, y) => x - y);
  if (a[0] === a[1] && a[2] === a[4]) return 'Yes';
  else if (a[0] === a[2] && a[3] === a[4]) return 'Yes';
  else return 'No';
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))
function fn(arr, target) {
  const L = arr.length;
  let l = 0, r = L - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
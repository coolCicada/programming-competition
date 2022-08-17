function fn (nums, target) {
  let l = -1, r = nums.length - 1;
  while (l < r) {
    const mid = (l + r + 1) >> 1;
    if (nums[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return r;
}
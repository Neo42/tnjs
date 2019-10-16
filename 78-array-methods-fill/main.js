'use strict';

// arr.fill(value, start, end)
// 以 value 为一个元素重复填充数组中索引数为 [start, end) 的元素
console.log([1, 2, 3].fill(4)); // [4, 4, 4]，以 4 为一个元素填充整个数组
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]，以 4 为一个元素从数组第二个元素位置开始填充
console.log([1, 2, 3].fill(4, -3, -1)); // [4, 4, 3]，以 4 为一个元素从数组倒数第二个元素位置开始填充到倒数第三个元素，较小的索引数写左边

'use strict';

let pow = (x, n) => {
  return n === 1 ? x : x * pow(x, n - 1);
};

console.log(pow(2, 3));

// 执行环境和执行环境栈：

// 第三次调用：n:1, x:2   2 * pow(2, 2)          自下而上堆起执行环境栈，每个执行环境都消耗一定的内存
// 第二次调用：n:2, x:2   2 * 2 * pow(2, 1)      所有函数执行完后再自上而下从内存中移除
// 第一次调用：n:3, x:2   2 * 2 * 2              循环结构只有一个执行环境，所以循环更省内存更高效

// 嵌套函数执行时的细节
// 1. 外层函数暂停执行
// 2. 外层函数执行环境被记录在执行环境栈中，新的内层函数执行环境被记录在外层执行环境的上方，也就是执行环境栈的顶部
// 3. 内层嵌套函数执行
// 4. 内层函数结束执行，弹出内层函数的执行环境，外层函数恢复执行

// https://tc39.es/ecma262/#sec-execution-contexts

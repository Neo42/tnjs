'use strict';

// arr.find((element, index, array) => {})
// element 元素， index 当前元素的索引数， array 原数组
// 对每个元素 element 执行一次回调函数（可以是任何形式），返回回调函数执行结果为 true 的第一个元素
let myArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
myArray.find(ele => console.log(ele)); // 输出每个元素对象
console.log(myArray.find(ele => ele.id === 2)); // { id:2 } 返回并输出对象属性 id 为 2 的 元素
console.log(
  myArray.find((ele, i, array) => {
    // 也可以不使用参数，但必须声明齐全，这里使用参数时直接跳过了 element
    console.log(i); // 0, 1, 2
    return i > array.length / 2 ? true : false;
  })
); // { id: 3 }，返回 index > 1.5 的第一个元素

// arr.filter((element, index, array) => {})
// 返回函数运行结果为 true 的所有元素
myArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }];
console.log(myArray.filter(ele => ele.id === 1)); // [{ id:1 }, { id:1 }]

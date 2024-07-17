// Filter method is same as map method only differnce is that when condition is true it gives new array.

const arr = [1,2,3,4,5,6,7,8];
const even = arr.filter(item=> item % 2==0);
console.log(even);
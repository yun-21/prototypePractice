const arr = [1,2,3,4,5]
console.log(arr.fill(0, 2, 4)); //[1, 2, 0, 0, 5]

console.log(arr.fill(4, 1)); //[1, 4, 4, 4, 4]

console.log(arr.fill(3)); //[3, 3, 3, 3, 3]

console.log(arr.fill('오', 1, 3)); //[ 3, '오', '오', 3, 3 ]


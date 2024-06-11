const arr = ['검정고무신','꽃신','단화']
console.log(Array.isArray(arr)) //true


const arrInit = [];
console.log(Array.isArray(arrInit)) //true

console.log(Array.isArray('[]')) //false

const array = new Array(5);
console.log(Array.isArray(array)) //true

const a = new Int16Array([15, 33])
console.log(Array.isArray(a));
// Expected output: false

a.forEach(element=>console.log(element+1))
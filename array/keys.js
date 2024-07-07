//* Array 인스턴스의 keys() 메서드는 배열의 각 인덱스에 대한 키를 포함하는 새로운 배열 반복자 객체를 반환한다.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
console.log(iterator) // Object [Array Iterator] {}

for (const key of iterator) {
    console.log(key);
    // 0
    // 1
    // 2
}

//* key() 메서드는 범용 메서드이다. this 값에는 length 속성과 정수 키 속성만 있을 것으로 예상된다.

//* 희소 배열에 keys() 사용하기
//* 배열에 실제로 존재하는 키만 포함하는 Object.keys()와 달리,
//* keys() 반복자는 누락된 속성을 나타내는 빈 공간을 무시하지 않는다.
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

//* 배열이 아닌 객체에 keys() 호출하기
// keys() 메서드는 this의 length 속성을 읽은 다음,
// 0과 length - 1 사이의 모든 정수 인덱스를 산출한다. 실제 인덱스 접근은 발생하지 않는다.
const arrayLike = {
    length: 3,
    // "a":1,
    // "b":2,
    // "c":3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
    console.log(entry);
}
// 0
// 1
// 2
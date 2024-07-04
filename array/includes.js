//* Array 인스턴스의 includes() 메서드는 배열의 항목에
//* 특정 값이 포함되어 있는지를 판단하여 
//* true 또는 false를 반환한다.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('at'));
// Expected output: false

console.log(pets.includes('cat',-3));
// Expected output: true

//* includes(searchElement, fromIndex)
//? searchElement : 찾을 값
//? fromIndex : 검색을 시작할 0기반 인덱스, 정수로 변환
//? - 음수 인덱스는 배열의 끝부터 거꾸로 센다. (fromIndex + array.length)

//* 희소 배열에서 includes() 사용하기
console.log([1, , 3].includes(undefined)); // true

//* 배열이 아닌 객체에서 inclues() 호출하기
//* includes() 메서드는 this의 length 속성을 읽은 다음 키가 length보다 
//* 작은 음수가 아닌 정수인 각 속성에 접근합니다.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 1, // length가 3이므로 includes()에서 무시됩니다.
  };
  console.log(Array.prototype.includes.call(arrayLike, 2));
  // true
  console.log(Array.prototype.includes.call(arrayLike, 1));
  // false
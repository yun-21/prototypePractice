//* Array 인스턴스의 indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환한다.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

//* 구문 indexOf(searchElement, fromIndex)
//* searchElement : 배열에서 위치를 찾을 요소입니다.
//* fromIndex : 검색을 시작할 0 기반 인덱스로, 정수로 변환됩니다.
//? 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. 즉, fromIndex < 0이면, fromIndex + array.length사용
//! indexOf() 메서드는 희소 배열의 빈 슬롯을 건너뜁니다.


//* 요소가 나타난 모든 위치 찾기
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]


//* 배열이 아닌 객체에서 indexOf() 호출하기
//* indexOf() 메서드는 this의 length 속성을 읽은 다음 키가 length보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length가 3이므로 indexOf()에서 무시됩니다.
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
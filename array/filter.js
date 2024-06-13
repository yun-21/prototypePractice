//* 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "pregsent"]

//* 배열을 함수에 통과시켜 새로운 배열 반환한다.
//* if문이 알아서 들어가있음 and {}가 없으면 암시적 반환이다.

//!

//* 검색 조건에 따른 배열 필터링(쿼리)
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

//* string.prototype.toLowerCase() => 소문자로 변경해줌
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
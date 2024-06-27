//*Array 인스턴스의 findLast() 메서드는 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환한다. 테스트 함수를 만족하는 요소가 없으면 undefined가 반환된다.
const array = [5, 12, 50, 130, 44];
const found = array.findLast((element) => element > 45)
console.log(found);

//* 배열에서 요소 속성을 기준으로 일치하는 마지막 객체 찾기
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.findLast((item) => {
  return item.quantity < 2});

console.log(result);
// { name: "fish", quantity: 1 }
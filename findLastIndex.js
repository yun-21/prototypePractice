//* findLastIndex() 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
const array = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

//* findLastIndex() 메서드는 반복적인 메소드입니다.
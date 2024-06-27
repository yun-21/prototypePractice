//* Array 인스턴스의 flat() 메서드는 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성합니다.
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//* flat() 메서드는 복사 메서드입니다.
//* 얕은 복사본을 반환합니다.
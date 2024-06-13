//* Array 인스턴스의 find() 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 테스트 함수를 만족하는 값이 없으면 undefined가 반환됩니다.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12



//* 희소 배열에서 find()사용하기
//* 희소 배열의 빈 슬롯은 undefined와 동일하게 동작합니다.
// 2, 3, 4 인덱스에 요소가 없는 배열로 선언
const array = [0, 1, , , , 5, 6];

// 값이 있는 요소만이 아닌 모든 인덱스를 표시합니다.
array.find((value, index) => {
  console.log("방문 인덱스:", index, "값:", value);
});
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: 5
// 방문 인덱스: 6 값: 6

// 삭제된 요소를 포함한 모든 인덱스를 표시합니다.
array.find((value, index) => {
  // 첫 번째 순회에서 요소 5 삭제
  if (index === 0) {
    console.log(array[5], "값인 array[5] 삭제");
    delete array[5];
  }
  // 삭제된 요소 5를 포함하여 모든 인덱스를 방문합니다.
  console.log("방문 인덱스:", index, "값:", value);
});
// 5 값인 array[5] 삭제
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: undefined
// 방문 인덱스: 6 값: 6

//* 배열이 아닌 객체에서 find()호출하기
const arrayLike = {
  length: 3,
  "-1": 0.1, // -1 < 0 이므로 find()에서 무시됩니다.
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
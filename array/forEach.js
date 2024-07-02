// *Array 인스턴스의 forEach() 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.
const array = ['a', 'b', 'c'];

array.forEach((element) => {
    console.log(element)
});

//* return이 필요 없다. === 반환값을 제공하지 않기 때문입니다
//* 오름차순 인덱스 순서로 한 번씩 호출한다

//* map()과 달리 forEach()는 항상 undefined를 반환하므로 체이닝할 수 없다.
const arr = [1, 2, 3];

const result = arr.forEach((num) => {
  console.log(num);
});

console.log(result); // undefined
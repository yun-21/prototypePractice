//* Array 인스턴스의 flatMap() 메서드는 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환한다. 이 메서드는 map()뒤에 깊이 1 -> 깊이 1의 flat()을 붙이는 것(arr.map(...args).flat())과 동일하지만, 두 메서드를 따로 호출하는 것보다 약간 더 효율적이다.

const arr1 = [1, 2, 1];

//2가 아닐땐 1로 결과값을 주고 값을 다 주면 평평하게 펼쳐서 하나의 배열로 합친다.
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]

//* flatMap()메서드는 순회 메서드입니다.

//* Array 인스턴스의 Join() 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여
//* 연결한 새 문자열을 만들어 반환한다. 
//* 배열에 항목이 하나만 있는 경우에 해당 항목은 구분 기호를 사용하지 않고 반환됩니다.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('와 '));
// Expected output: "Fire와 Air 와Water"

//* join() 메서드는 범용 메서드이다. this 값에는 length 속성과 정수 키 속성만 있을 것으로 예상된다.

//* 희소배열에 join을 사용하면, join()은 빈 슬롯을 undefined와 같이 처리하고 추가 구분 기호를 생성한다.
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'

//* 배열이 아닌 객체에서 join() 호출하기
//* join 메서드는 this의 length 속성을 읽은 다음 키가 
//* length보다 작은 음이 아닌 정수인 각 속성에 접근한다.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // length가 3 이므로 join()에서 무시됨.
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
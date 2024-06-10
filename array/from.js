//Array.from()정적 메서드는 순회 가능 또는 유사 배열 객체에서 얕게 복사된  새로운 Array인스턴스를 생성한다.
const arr = ['병아리', '송아지', '사냥꾼', '물오리'];
console.log(Array.from(arr, (x)=>x+'랑'))

const obj ={};
Array.from(arr, (element,index)=>{
  obj[index+1]=element
})
console.log(obj);

const str = Array.from('hello');
console.log(str);
console.log(str.includes('l'));
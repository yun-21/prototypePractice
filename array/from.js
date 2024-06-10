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
function sleep(func, delay){
  const delayUntil = Date.now()+delay;
  while(Date.now()<delayUntil);
  //일정 시간(delay)이 경과한 이후에 콜백 함수(func)를 호출한다.
  func();
}

function foo(){
  console.log('foo');
}
function bar(){
  console.log('bar');
}

sleep(foo, 3*1000);
bar()
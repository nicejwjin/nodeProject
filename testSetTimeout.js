var count = 0;
var callback = function() {
  timeoutTest();
  count++;
  if(count >= 5) {
    console.timeEnd('test');
  }
  console.log('run!');
}


var timeoutTest = function() {
  setTimeout(callback, 1000);
}
console.time('test');
timeoutTest();



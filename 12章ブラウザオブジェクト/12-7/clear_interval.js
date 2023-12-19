function  delayTask () {
    console.log('1秒ごと繰り返し実行される');
}
const timerId =  setInterval(delayTask,1000);
clearInterval(timerId);
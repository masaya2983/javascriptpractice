function asyAlert() {
    awtTimeout(function)(){
        alert('アラートを表示');
    },0);
    console.log('ログを出力');
}
asyncAlert();
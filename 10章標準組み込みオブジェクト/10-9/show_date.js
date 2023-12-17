const today = new Date().toLocaleDateString('ja-jp',{
    dateStyle:'long'
});
console.log(today);

const formatter = Intl.DateTimeFormat('ja-JP', {
    dateStyle:'long'
});

const today = formatter.format(new Date());
console.log(today)
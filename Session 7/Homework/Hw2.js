console.log('Use setInterval for shorter code');
// setInterval(function() { 
//     alert('Hen gio'); 
// }, 5000);
// bàit tự làm

function sayHi() {
    console.log('Hello worl');
}

setTimeOut(sayHi, 3000); // hiển thị text sau 3s
setInterval(sayHi, 3000); // cứ sau mỗi 3s lại chạy hàm sayHi 1 lần

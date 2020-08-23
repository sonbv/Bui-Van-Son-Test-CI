// console.log('Log all of 3 the properties of the movie object to the console using 2 different ways');
let movie ={
    title: 'Inception',
    year: 2015, 
    rate: 9.3};
//     console.log(movie.title);
//     console.log(movie.year);
//     console.log(movie.rate);

//     console.log(movie['title']);
//     console.log(movie['year']);
//     console.log(movie['rate']);

// console.log('Log an non-existent property of the movie, director, what is the result?');
// console.log('The result shows the value is undefined');

// console.log('Nhắc lại bài cũ : Khởi tạo 1 list, trong này liệt kê ít nhất ba thứ mà bạn thích (Sport, LOL, BTS) , thêm 1 thứ mà bạn thích vào cuối list này, sau khi thêm cần in ra list mới. Yêu cầu : in ra phần tử đầu tiên, cuối cùng và gần cuối của list, tất cả các phần tử này đều phải chuyển thành chữ hoa. Ví dụ: SPORT, LOL, BTS');

// let fav = ['Sport' , 'LOL' , 'BTS'];
// fav.push('Dance');

// console.log(fav);
// console.log(fav[0].toUpperCase());
// console.log(fav[fav.length-1].toUpperCase());
// console.log(fav[fav.length-2].toUpperCase());

console.log('Now apply it to upgrade Read object, after users enter the property, check whether the property exists, if yes, show them the value, if no, tell them that');

let x = prompt('What do you want to know?');
if (movie.x !== -1){
    alert(x + ' does not exist in our data');
}
else {
    alert(movie[x]);
}



// console.log('1. Delete 1 item at position i from movies array movies, i entered by users')
// let filmList = ['Alias', 'Hero', 'Painted skin', 'Chuyen cua Pao'];
// i = prompt('Enter the position where you want to remove the favoutire movie')
// filmList.splice(i,1)
// console.log(filmList);


console.log('2. Delete n item at position i from movies array, i and n entered by users')
let filmList = ['Alias', 'Hero', 'Painted skin', 'Chuyen cua Pao'];
n = prompt('Enter the number of movies that you want to remove')
i = prompt('Enter the position where you want to start removing the favoutire movie')
filmList.splice(i,n)
console.log(filmList);
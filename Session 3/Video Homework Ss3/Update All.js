console.log('Change all items of movies array into lowercase');
let filmList = ['Alias', 'Hero', 'Painted skin'];

for (let x = 0 ; x < Math.ceil(filmList.length); x++) {
    filmList[x] = filmList[x].toLowerCase()
}
console.log(filmList)
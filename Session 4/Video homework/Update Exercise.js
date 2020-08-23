// console.log('Change the rate of the movie to 8.7');
let movie ={
    title: 'Inception',
    year: 2015, 
    rate: 9.3};
movie.rate = 8.7
console.log(movie.rate);

console.log('Increase the rate of the movie by 0.5');
movie.rate+= 0.5
console.log(movie.rate);

console.log('Write a script, asking users what they want to update and what is the update, perform the update and then log out the result');
let x = prompt('What do you want to update?');
let y = prompt('What is the update?');
movie[x] = y
console.log(movie);


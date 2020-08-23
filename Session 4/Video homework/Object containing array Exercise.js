console.log('Create an object named movie, with title, year and rate and characters. The characters contain at least 3 characters of the movie');
let movie ={
    title: 'Inception',
    year: 2015, 
    rate: 9.3,
    casts: ['David', 'Selena', 'Adam'],
};
console.log(movie);
console.log('Print or log out the movie data in the following format (Note, remember the spread operator … for fast logging an array)')

console.log('Add new cast to the movie and then log it back')
movie.casts.push('Frank');
console.log(movie);
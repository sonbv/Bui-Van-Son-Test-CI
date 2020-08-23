console.log('Create an array named movies, containing at least three movies, all have title, year, rate and characters properties')
let movie1 = {
    title: 'Inception',
    year: 2015, 
    rate: 9.3,
    casts: ['James', 'Clara', 'Mary'],
};
let movie2 = {
    title: 'Titanic',
    year: 2000, 
    rate: 9.5,
    casts: ['Maria', 'Petet', 'Martin'],
};
let movie3 = {
    title: 'Hero',
    year: 2013, 
    rate: 8.3,
    casts: ['Zhao Li', 'Hong Lim', 'Feng'],
};

let movies = [];
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);
console.log(movies);
console.log('Log or print all the movies in the movies array, for example')
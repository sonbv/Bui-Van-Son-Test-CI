// console.log('8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:');
// let sheepSize = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Son and here are my sheep sizes:\n ${sheepSize.join(" ")}`);

// console.log('8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:');
// let sheepSize = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Son and here are my sheep sizes:\n ${sheepSize.join(" ")}`);
// let max = Math.max(...sheepSize);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);

console.log('8.3. When your biggest sheer, its size will return to the default size, which is 8.');
let sheepSize = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello, my name is Son and here are my sheep sizes:\n ${sheepSize.join(" ")}`);
let max = Math.max(...sheepSize);
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max) {
        sheepSize[i] = 8;
    } 
}
console.log(`After shearing, here is my flock \n ${sheepSize.join(" ")}`);

console.log('8.4. In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out');
for (let x = 0; x < sheepSize.length; x++) {
    sheepSize[x] += 50;
}
console.log(`One month has, passed, my sheeps have grown, here are their sizes \n ${sheepSize.join(" ")}`);

console.log('8.5. Let’s do this for 4 months');
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < sheepSize.length; y++) {
        sheepSize[y] += 50; 
    } 
}
console.log(`4 months have, passed, my sheeps have grown, here are their sizes \n ${sheepSize.join(" ")}`);

console.log('8.6. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:')

// console.log('1. Here are the following list of words\n [‘to’, ‘be’, ‘that’, ‘of’, ‘elon’, ‘to’, ‘this’, ‘now’, ‘back’, ‘cool’, ‘hey’, ‘love’, ‘of’, ‘life’, ‘that’, ‘rain’, ‘summer’, ‘color’, ‘now’, ‘of’, ‘hat’, ‘late’, ‘sorry’, ‘my’, ‘team’]\n Write a program to count the occurrences of the words');

// let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];

// function foo(arr) {
//     let a = [], b = [], prev;

//     arr.sort();
//     for ( let i = 0; i < arr.length; i++ ) {
//         if ( arr[i] !== prev ) {
//             a.push(arr[i]);
//             b.push(1);
//         } else {
//             b[b.length-1]++;
//         }
//         prev = arr[i];
//     }

//     return [a, b];
// }
// let result = foo(arr);
// console.log('[' + result[0] + ']\n [' + result[1] + ']');

console.log('2. Create and array to store a list of laptops in inventory, the data is as follow');
const inventory = [
    {
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },]

for (let item of inventory) {
    for (let x in item) {
        console.log($(x): ${item[x]})
    }
}
// console.log('------------------');

console.log(inventory);
console.log('3. The above data is good to deal with all of the laptops equally, but when it comes to grouping the items by brand, it should be reshaped as below. Write a program to do the reshaping from inventory, from now, use the reshaped data to process');
// inventory.sort();
let inventoryByBrand = {};

console.log(inventory);
console.log('4.From inventoryByBrand, write a program to count the generations of a certain brand in the inventory');
// let count = prompt('Which brand?');

    
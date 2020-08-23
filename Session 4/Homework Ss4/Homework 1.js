console.log('Run the following code, observe and then answer the questions');
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

// for (let x in product) {
//     console.log(x);
// }
console.log('Questions: 1.1. What does x receives from product, property or value?');
console.log('Answer: x receives the property from the product')
console.log('1.2. Use the for loop to print/log out the following output');

for(let x in product) {
    if (product.hasOwnProperty(x)) {
    console.log(x + " : " + product[x]);
    }
}
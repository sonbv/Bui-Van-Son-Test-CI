// console.log('1.	Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color');
let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    {
        name: 'VSmart active 1',
        brand: 'Vsmart',
        price: 5438,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
    },
    {
        name: 'SamSung Galaxy A9',
        brand: 'SamSung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    },
];
// console.log('5.1. Print/log name and price of all the products out');
// for (let index = 0; index < products.length; index++) {
//     console.log("------------");
//     console.log(`Name : ${products[index].name}`);
//     console.log(`Price : ${products[index].price}`);
// }

// console.log('5.2. Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users');

// for (let index = 0; index<products.length; index++) {
//     console.log(`#${products.indexOf(products[index])+1}. ${products[index].name}`);
//     console.log(`Price : ${products[index].price}`);
// }

// let index = Number(prompt('Enter product position'));
// for(let x in products[index]){
//     console.log(`${x} : ${products[index][x]}`);
// }

// console.log('5.3. Write a script printing/logging out the products based on category input by users');

// let cate = prompt('Enter your category');
// for (let index = 0; index<products.length; index++) {
//     if (products[index].category == cate) {
//         console.log("----------------");
//         console.log(`Name : ${products[index].name}`);
//         console.log(`Price : ${products[index].price}`);
//     }
// }

console.log('5.4. Add providers to each product and printing/logging out all of the products');
products[0].providers = ['Phu kien zero','Dientuccc'];
products[1].providers = ['Tgdd','Ddghn','Vhstore'];
products[2].providers = ['Tgdd'];
products[3].providers = ['Tgdd'];
for (let index = 0; index < products.length; index++) {
    console.log(`#${index+1}. ${products[index].name}`);
    console.log(`Price: ${products[index].price}`);
    console.log(`Providers: ${products[index].providers}`)
}
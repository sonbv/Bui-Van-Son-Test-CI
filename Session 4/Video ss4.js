// let person = ['Nam', 19, 'Hanoi', 25, false];
// console.log(person);

// let person = {};
// console.log(person);

// let person = {
//     name: 'Nam'
// };
// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 19
// };
// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 18
// };
// console.log(person);
// console.log(person.age);

// let prop = 'name';
// // console.log(person.prop);
// console.log(person[prop]);

// let person = {
//     name: 'Nam',
//     age: 18
// };
// console.log(person.name);
// person.name = 'Nguyễn Phương Nam';
// console.log(person.name);
// console.log(person);


// person['age'] = 19
// console.log(person['age']);
// console.log(person);

// person.age++;
// person['age']++;
// console.log(person);


// let person = {
//     name: 'Nam',
//     age: 18
// };
// person.location = 'Hanoi';
// console.log(person);

// console.log(person);
// person['status'] = 'Single';
// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 18
// };
// console.log(person);
// // delete person.age;
// delete person['age'];
// console.log(person);

// let person1 = {
//     name: 'Nam',
//     age: 18
// };

// let person2 = {
//     name: 'Duc',
//     age: 24
// };

// let personArr = [];
// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);

// console.log(personArr[0]);
// let p = personArr[0];
// console.log(p);
// console.log(p.name);

// console.log(personArr[0].name);
// let n = personArr[0].name;
// console.log(n);

// for(let i = 0; i < personArr.length; i++) {
//     let p = personArr[i]
//     // console.log(personArr[i];
//     console.log(p.age); 
// }

// let person = {
//     name: 'Nam',
//     age: 18,
//     favs: ['Netflix', 'Cafe', 'Code'],
// };
// console.log(person);


let person = {
    name: 'Nam',
    age: 18,
    favs: ['Netflix', 'Cafe', 'Code'],
};
console.log(person.favs);
console.log(person.favs[1]);

let favs = person.favs;
console.log(favs);
for(let i = 0; i < favs.lenght; i++) {
    console.log(favs[i]);
}
favs.push('Macbook');
console.log(favs);
console.log(person);

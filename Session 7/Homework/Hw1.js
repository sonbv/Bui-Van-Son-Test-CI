const container = document.getElementById('list');

// for(let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML(`<position>`, '<li>${i}</li>')
// }

// console.log('1. beforebegin - d \n' + '<li>0</li> \n' + '<li>1</li> \n' + '<li>2</li> \n' + '<ul id="list"></ul>');
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML('beforebegin', '<li>${i}</li>');
}
// console.log('2. afterbegin - a');
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML('afterbegin', '<li>${i}</li>');
}
// console.log('3. beforeend - c');
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML('beforeend', '<li>${i}</li>');
}
// console.log('4. afterend - b \n' + '<ul id="list"></ul>'+ '<li>2</li> \n' + '<li>1</li> \n' + '<li>0</li> \n');
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML('afterend', '<li>${i}</li>');
}

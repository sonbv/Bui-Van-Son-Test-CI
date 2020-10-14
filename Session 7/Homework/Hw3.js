console.log('3.1. Can a variable declared by let, in a function still exists after the function finishes running?');
console.log('Answer: Yes')
for (var a = 0; a <= 10; a++) {
  }
  
  console.log(a);

console.log('3.2. Can var variable declared by var, in a function still exists after the function finishes running?');
console.log('Answer: No')
for (let i = 0; i <= 10; i++) {
  }
  
  console.log(i);
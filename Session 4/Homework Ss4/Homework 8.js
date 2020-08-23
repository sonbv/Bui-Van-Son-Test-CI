console.lo('8. Given the object');
const square = {
    x: 100,
    y: 50,
    width: 20,
};
console.log('Move the turtle to the provided position, use penup() and pendown() to NOT leave any traces')
let pos = {
    x: 100,
    y: 50,
    width: 20,
  };
  penup();
  rt(90);
  fd(pos.x);
  rt(270);
  fd(pos.y)
  pendown();
  for(let i = 0;i <4; i ++){
      fd(pos.width);
        rt(90);
  }
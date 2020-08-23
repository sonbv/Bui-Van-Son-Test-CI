console.lo('9. Given the object');
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};
console.log('Use JS Turtle, to draw a rectangle at position (x, y) with size width and height')
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y)
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.height);
  rt(90);
  fd(rect.width);
  rt(90);
}
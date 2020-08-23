console.lo('Given the object');
const pos = {
    x: 200,
    y: 50,
}
console.log('Move the turtle to the provided position, use penup() and pendown() to NOT leave any traces')
penup();
rt(90);
fd(pos.x);
rt(270);
fd(pos.y);
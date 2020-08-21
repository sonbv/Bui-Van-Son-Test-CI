const colors = ["red", "gray", "blue", "purple", "cyan"];
function square() {
    for (var i = 0; i <= 4; i++) {
        color(colors[i])
        for (var j = 1; j <= 4; j++) {
            fd(100 * i)
            rt(90)
        }
    }
}
square()
function order(index) {
    this.index = index;
}
var pizza_count = 0;
var drink_count = 0;
function increase_pizza() {
    pizza_count += 1;
    document.getElementById("pizza_count").innerHTML = pizza_count;
}
function increase_drink() {
    if (pizza_count > drink_count) {
    drink_count += 1;
    document.getElementById("drink_count").innerHTML = drink_count;
    }
}
function decrease_pizza() {
    if (pizza_count >= 1) {
    pizza_count -= 1;
    document.getElementById("pizza_count").innerHTML = pizza_count;
    }
    if (drink_count > pizza_count) {
    drink_count = pizza_count;
    document.getElementById("drink_count").innerHTML = drink_count;
    }
}
function decrease_drink() {
    if (drink_count >= 1) {
    drink_count -= 1;
    document.getElementById("drink_count").innerHTML = drink_count;
    }
}
function show() {
document.getElementById("result").innerHTML = pizza_count*5 + drink_count*2;
}
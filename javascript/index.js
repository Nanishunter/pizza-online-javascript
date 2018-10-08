
function Order() {
    this.total_count = 0;
    this.pizzas_count = 0;
    this.drinks_count = 0;
}

var order = new Order();

// Lisää 1
Order.prototype.increase = function (type, price) {
    if (type === 'pizza') {
        this.pizzas_count++;
        document.getElementById("pizzaAmount").value = this.pizzas_count;
        this.total_count += price;
    }
    else if (type === 'drink') {
        if (this.pizzas_count > this.drinks_count) {
            this.drinks_count++;
            document.getElementById("drinkAmount").value = this.drinks_count;
            this.total_count += price;
        }

    }
    document.getElementById("total").value = this.total_count + " €";
};
//Poista 1
Order.prototype.decrease = function (type, price) {
    if (type === 'pizza') {
        if (this.pizzas_count > 0) {
            //poistetaan jos pizzoja enemmän kuin juomia
            if (this.pizzas_count <= this.drinks_count) {
                order.decrease('drink', 2.5);
            }
            this.pizzas_count--;
            this.total_count -= price;
            document.getElementById('pizzaAmount').value = this.pizzas_count;

        }
    }
    else if (type === 'drink') {
        if (this.drinks_count > 0) {
            this.drinks_count--;
            this.total_count -= price;
            document.getElementById('drinkAmount').value = this.drinks_count;
        }
    }
    document.getElementById("total").value = this.total_count + " €";
};

/* var JsonData = [
    {
        "id": "1",
        "pizza": "Opera",
        "täytteet": "Kinkku, tonnikala, juusto"

    }, {

        "id": "2",
        "pizza": "Special Opera",
        "täytteet": "Kinkku, tonnikala, salami, Juusto"
    },
    {
        "id": "4",
        "pizza": "Tonnikala",
        "täytteet": "Tonnikala, Juusto, Tomaatti, Parmesaani"
    },
    {
        "id": "5",
        "pizza": "Tonnikala",
        "täytteet": "Tonnikala, Juusto, Tomaatti, Parmesaani"
    },
    {
        "id": "6",
        "pizza": "Tonnikala",
        "täytteet": "Tonnikala, Juusto, Tomaatti, Parmesaani"
    },
    {
        "id": "7",
        "pizza": "Tonnikala",
        "täytteet": "Tonnikala, Juusto, Tomaatti, Parmesaani"
    }


]

JsonData.forEach(function
    (menu) {
    var menu = JSON.stringify((JsonData));
    document.getElementById('menu').innerHTML = menu;
    console.log(JsonData);
});




//Tässä ensin tehty versio, joka oli väärin, en käyttänyt olioita

/*function increase_pizza() {
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
}*/
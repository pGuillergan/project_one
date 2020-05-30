"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    constructor(id, coffee_name, shots_of_espresso, container, total_calories, contains_milk, price) {
        this.id = id;
        this.coffee_name = coffee_name;
        this.shots_of_espresso = shots_of_espresso;
        this.container = container;
        this.total_calories = total_calories;
        this.contains_milk = contains_milk;
        this.price = price;
    }
}
exports.Coffee = Coffee;

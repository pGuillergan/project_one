"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = require("./../model/coffee");
class CoffeeDTO {
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
exports.CoffeeDTO = CoffeeDTO;
function convertToCoffeeObject(row) {
    return new coffee_1.Coffee(row.id, row.coffee_name, row.shots_of_espresso, row.container, row.total_calories, row.contains_milk, row.price);
}
exports.convertToCoffeeObject = convertToCoffeeObject;

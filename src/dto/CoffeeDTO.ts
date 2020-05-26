import {Coffee} from "./../model/coffee"

export class CoffeeDTO {
    id:number;
    coffee_name: string;
    shots_of_espresso: number;
    container: string;
    total_calories: number;
    contains_milk: boolean;
    price: number;
    constructor(id:number, coffee_name: string, shots_of_espresso: number, container: string, total_calories: number, contains_milk: boolean, price: number) {
        this.id = id;
        this.coffee_name = coffee_name;
        this.shots_of_espresso = shots_of_espresso;
        this.container = container;
        this.total_calories = total_calories;
        this.contains_milk = contains_milk;
        this.price = price;
    }
}

export function convertToCoffeeObject(row:CoffeeDTO):Coffee{
    return new Coffee(row.id, row.coffee_name, row.shots_of_espresso, row.container, row.total_calories, row.contains_milk, row.price);
}


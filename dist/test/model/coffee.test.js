"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = require("./../../model/coffee");
describe('Testing Coffee Class', () => {
    it('creates new Coffee object', () => {
        const coffee = new coffee_1.Coffee(0, "Coffee", 1, "Cup", 300, true, 5.00);
        expect(coffee.id).toBe(0);
        expect(coffee.coffee_name).toBe("Coffee");
        expect(coffee.shots_of_espresso).toBe(1);
        expect(coffee.container).toBe("Cup");
        expect(coffee.total_calories).toBe(300);
        expect(coffee.contains_milk).toBe(true);
        expect(coffee.price).toBe(5.00);
    });
});

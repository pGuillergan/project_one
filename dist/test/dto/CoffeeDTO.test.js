"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoffeeDTO_1 = require("./../../dto/CoffeeDTO");
describe('Testing Coffee Object Conversion', () => {
    it('converts dictionary to coffee object', () => {
        const input = {
            id: 0,
            coffee_name: "Coffee",
            shots_of_espresso: 1,
            container: "Cup",
            total_calories: 300,
            contains_milk: true,
            price: 5.00
        };
        const output = CoffeeDTO_1.convertToCoffeeObject(input);
        expect(output.id).toBe(0);
        expect(output.coffee_name).toBe("Coffee");
        expect(output.shots_of_espresso).toBe(1);
        expect(output.container).toBe("Cup");
        expect(output.total_calories).toBe(300);
        expect(output.contains_milk).toBe(true);
        expect(output.price).toBe(5.00);
    });
    it('creates new Coffee DTO object', () => {
        const coffeeDTO = new CoffeeDTO_1.CoffeeDTO(0, "Coffee", 1, "Cup", 300, true, 5.00);
        expect(coffeeDTO.id).toBe(0);
        expect(coffeeDTO.coffee_name).toBe("Coffee");
        expect(coffeeDTO.shots_of_espresso).toBe(1);
        expect(coffeeDTO.container).toBe("Cup");
        expect(coffeeDTO.total_calories).toBe(300);
        expect(coffeeDTO.contains_milk).toBe(true);
        expect(coffeeDTO.price).toBe(5.00);
    });
});

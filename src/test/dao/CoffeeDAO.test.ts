import { app } from "./../../index"
import * as coffeeDAO from "./../../dao/CoffeeDAO"
import { Coffee } from "./../../model/coffee";
const supertest = require("supertest");
const request = supertest(app);

app.get("/Coffee/3", async (req, res) => {
    res.json([{
        "id": 3,
        "coffee_name": "Red Eye",
        "shots_of_espresso": 1,
        "container": "Coffee Mug",
        "total_calories": 0,
        "contains_milk": false,
        "price": "3.50"
    }]);
});

app.get("/Coffee/search/container/Espresso Cup", async (req, res) => {
    res.json(
        [
            {
                "id": 1,
                "coffee_name": "Espresso",
                "shots_of_espresso": 1,
                "container": "Espresso Cup",
                "total_calories": 3,
                "contains_milk": false,
                "price": "3.00"
            },
            {
                "id": 2,
                "coffee_name": "Double Espresso",
                "shots_of_espresso": 2,
                "container": "Espresso Cup",
                "total_calories": 6,
                "contains_milk": false,
                "price": "4.00"
            }
        ]
    );
});

describe('Testing Coffee Data Access Object', () => {
    it("Testing get endpoint", async done => {
        const res: Coffee[] = await coffeeDAO.getCoffeeItem(3);

        expect(res[0].coffee_name).toBe("Red Eye");
        expect(res[0].shots_of_espresso).toBe(1);
        expect(res[0].container).toBe("Coffee Mug");
        expect(res[0].total_calories).toBe(0);
        expect(res[0].contains_milk).toBe(false);
        expect(res[0].price).toBe("3.50");

        done();
    });
    it("Testing search endpoint", async done => {
        const key = "container";
        const word = "Espresso Cup";
        const res: Coffee[] = await coffeeDAO.searchCoffeeItem(key, word);

        expect(res[0].coffee_name).toBe("Espresso");
        expect(res[0].shots_of_espresso).toBe(1);
        expect(res[0].container).toBe("Espresso Cup");
        expect(res[0].total_calories).toBe(3);
        expect(res[0].contains_milk).toBe(false);
        expect(res[0].price).toBe("3.00");

        expect(res[1].coffee_name).toBe("Double Espresso");
        expect(res[1].shots_of_espresso).toBe(2);
        expect(res[1].container).toBe("Espresso Cup");
        expect(res[1].total_calories).toBe(6);
        expect(res[1].contains_milk).toBe(false);
        expect(res[1].price).toBe("4.00");

        done();
    });
})


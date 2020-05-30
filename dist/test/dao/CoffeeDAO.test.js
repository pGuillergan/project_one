"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../../index");
const coffeeDAO = __importStar(require("./../../dao/CoffeeDAO"));
const supertest = require("supertest");
const request = supertest(index_1.app);
index_1.app.get("/Coffee/3", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json([{
            "id": 3,
            "coffee_name": "Red Eye",
            "shots_of_espresso": 1,
            "container": "Coffee Mug",
            "total_calories": 0,
            "contains_milk": false,
            "price": "3.50"
        }]);
}));
index_1.app.get("/Coffee/search/container/Espresso Cup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json([
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
    ]);
}));
describe('Testing Coffee Data Access Object', () => {
    it("Testing get endpoint", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield coffeeDAO.getCoffeeItem(3);
        expect(res[0].coffee_name).toBe("Red Eye");
        expect(res[0].shots_of_espresso).toBe(1);
        expect(res[0].container).toBe("Coffee Mug");
        expect(res[0].total_calories).toBe(0);
        expect(res[0].contains_milk).toBe(false);
        expect(res[0].price).toBe("3.50");
        done();
    }));
    it("Testing search endpoint", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const key = "container";
        const word = "Espresso Cup";
        const res = yield coffeeDAO.searchCoffeeItem(key, word);
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
    }));
});

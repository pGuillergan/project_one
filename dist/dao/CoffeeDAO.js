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
Object.defineProperty(exports, "__esModule", { value: true });
const CoffeeDTO_1 = require("./../dto/CoffeeDTO");
const coffee_1 = require("./../model/coffee");
const poolDB_1 = require("./poolDB");
const Logger_1 = require("./../utils/Logger");
var path = require('path');
var scriptName = path.basename(__filename);
function getCoffeeList() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Coffee");
            let output = results.rows.map(CoffeeDTO_1.convertToCoffeeObject);
            Logger_1.log("DAO: Connecing to DB", "getCoffeeList", "", output, scriptName);
            return output;
        }
        catch (err) {
            Logger_1.log("DAO: Connecing to DB", "getCoffeeList", "", err, scriptName);
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.getCoffeeList = getCoffeeList;
function getCoffeeItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Coffee WHERE id = $1", [id]);
            let output = results.rows.map(CoffeeDTO_1.convertToCoffeeObject);
            Logger_1.log("DAO: Connecing to DB", "getCoffeeItem", id, output, scriptName);
            return output;
        }
        catch (err) {
            Logger_1.log("DAO: Connecing to DB", "getCoffeeItem", "", err, scriptName);
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.getCoffeeItem = getCoffeeItem;
function searchCoffeeItem(key, word) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            // const results = await client.query("SELECT * FROM Coffee WHERE $1 = $2", [key, word]);
            const results = yield client.query(`SELECT * FROM Coffee WHERE ${key} = '${word}'`);
            let output = results.rows.map(CoffeeDTO_1.convertToCoffeeObject);
            Logger_1.log("DAO: Connecing to DB", "searchCoffeeItem", `${key}, ${word}`, output, scriptName);
            return output;
        }
        catch (err) {
            Logger_1.log("DAO: Connecing to DB", "searchCoffeeItem", "", err, scriptName);
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.searchCoffeeItem = searchCoffeeItem;
function saveCoffeeItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newCoffee = new coffee_1.Coffee(0, "", 0, "", 0, false, 0);
        try {
            client = yield poolDB_1.pool.connect();
            const result = yield client.query("INSERT INTO Coffee(coffee_name, \
            shots_of_espresso, \
            container, \
            total_calories, \
            contains_milk, \
            price) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;", [input.coffee_name,
                input.shots_of_espresso,
                input.container,
                input.total_calories,
                input.contains_milk,
                input.price]);
            let coffeeId = result.rows[0].id;
            console.table(result.rows);
            newCoffee = input;
            newCoffee.id = coffeeId;
            Logger_1.log("DAO: Connecing to DB", "saveCoffeeItem", `Coffee`, newCoffee, scriptName);
            return newCoffee;
        }
        catch (e) {
            Logger_1.log("DAO: Connecing to DB", "saveCoffeeItem", "", e, scriptName);
            console.log(e);
        }
        finally {
            client && client.release();
        }
        return newCoffee;
    });
}
exports.saveCoffeeItem = saveCoffeeItem;
function updateCoffeeItem(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newCoffee = new coffee_1.Coffee(0, "", 0, "", 0, false, 0);
        try {
            client = yield poolDB_1.pool.connect();
            const result = yield client.query("UPDATE Coffee SET coffee_name = $1, \
            shots_of_espresso = $2, \
            container = $3, \
            total_calories = $4, \
            contains_milk = $5, \
            price = $6 WHERE id=$7 RETURNING id;", [input.coffee_name,
                input.shots_of_espresso,
                input.container,
                input.total_calories,
                input.contains_milk,
                input.price,
                id]);
            let coffeeId = result.rows[0].id;
            console.table(result.rows);
            newCoffee = input;
            newCoffee.id = coffeeId;
            Logger_1.log("DAO: Connecing to DB", "updateCoffeeItem", `Coffee`, newCoffee, scriptName);
            return newCoffee;
        }
        catch (e) {
            Logger_1.log("DAO: Connecing to DB", "updateCoffeeItem", "", e, scriptName);
            console.log(e);
        }
        finally {
            client && client.release();
        }
        return newCoffee;
    });
}
exports.updateCoffeeItem = updateCoffeeItem;
function deleteCoffeeItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Coffee WHERE id = $1", [id]);
            // console.log(results.rows);
            let output = results.rows.map(CoffeeDTO_1.convertToCoffeeObject);
            // console.log(output)
            let del = yield client.query("DELETE FROM Coffee WHERE id = $1", [id]);
            console.log(del);
            Logger_1.log("DAO: Connecing to DB", "updateCoffeeItem", id, del, scriptName);
            return output;
        }
        catch (err) {
            Logger_1.log("DAO: Connecing to DB", "deleteCoffeeItem", "", err, scriptName);
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.deleteCoffeeItem = deleteCoffeeItem;

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
const express_1 = require("express");
const coffeeService = __importStar(require("../service/CoffeeService"));
const coffee_1 = require("./../model/coffee");
const Logger_1 = require("./../utils/Logger");
exports.coffeeRouter = express_1.Router();
var path = require('path');
var scriptName = path.basename(__filename);
exports.coffeeRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield coffeeService.getCoffeeList());
        Logger_1.log("Coffee router - get coffee list", "get: /", "", "json file", scriptName);
    }
    catch (e) {
        Logger_1.log("Coffee router - get coffee list", "get: /", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));
exports.coffeeRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        Logger_1.log("Coffee router - get coffee by id", "get: /:id", `${id}`, "json file", scriptName);
        res.json(yield coffeeService.getCoffeeItem(id));
    }
    catch (e) {
        Logger_1.log("Coffee router - get coffee by id", "get: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));
exports.coffeeRouter.get('/search/:key/:word', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const key = req.params.key;
        const word = req.params.word;
        console.log(key);
        console.log(word);
        res.json(yield coffeeService.searchCoffeeItem(key, word));
        Logger_1.log("Coffee router - get coffee by keyword", "get: /search/:key/:word", `Key: ${key}, Word: ${word}`, "", scriptName);
    }
    catch (e) {
        Logger_1.log("Coffee router - get coffee by keyword", "get: /search/:key/:word", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));
exports.coffeeRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { coffee_name, shots_of_espresso, container, total_calories, contains_milk, price } = req.body;
    try {
        let coffee = yield coffeeService.saveCoffeeItem(new coffee_1.Coffee(0, coffee_name, shots_of_espresso, container, total_calories, contains_milk, price));
        res.status(201).json(coffee);
        Logger_1.log("Coffee router - save coffee entry", "post: /", `${req.body}`, res.statusCode, scriptName);
    }
    catch (e) {
        Logger_1.log("Coffee router - save coffee entry", "post: /", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));
exports.coffeeRouter.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { coffee_name, shots_of_espresso, container, total_calories, contains_milk, price } = req.body;
    const id = Number(req.params.id);
    try {
        let coffee = yield coffeeService.updateCoffeeItem(id, new coffee_1.Coffee(0, coffee_name, shots_of_espresso, container, total_calories, contains_milk, price));
        res.status(201).json(coffee);
        Logger_1.log("Coffee router - update coffee entry", "post: /:id", `${req.body}`, res.statusCode, scriptName);
    }
    catch (e) {
        Logger_1.log("Coffee router - update coffee entry", "post: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));
exports.coffeeRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedItem = yield coffeeService.deleteCoffeeItem(id);
        res.send(`Successfully deleted ${deletedItem[0].coffee_name} with ID no ${id} in database `);
        res.json(yield coffeeService.deleteCoffeeItem(id));
        Logger_1.log("Coffee router - delete coffee entry", "delete: /:id", `ID: ${id}`, res.statusCode, scriptName);
    }
    catch (e) {
        Logger_1.log("Coffee router - delete coffee entry", "delete: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message);
    }
}));

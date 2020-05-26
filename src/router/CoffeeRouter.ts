import { Router } from 'express';
import * as coffeeService from "../service/CoffeeService";
import { Coffee } from "./../model/coffee";
import {log} from "./../utils/Logger";
export const coffeeRouter = Router();
var path = require('path');
var scriptName = path.basename(__filename);

coffeeRouter.get('/', async (req, res) => {
    
    try {
        res.json(await coffeeService.getCoffeeList());
        log("Coffee router - get coffee list", "get: /", "", "json file", scriptName);
    } catch (e) {
        log("Coffee router - get coffee list", "get: /", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})

coffeeRouter.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        log("Coffee router - get coffee by id", "get: /:id", `${id}`, "json file", scriptName);
        res.json(await coffeeService.getCoffeeItem(id));

    } catch (e) {
        log("Coffee router - get coffee by id", "get: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})

coffeeRouter.get('/search/:key/:word', async (req, res) => {
    try {
        const key = req.params.key;
        const word = req.params.word;
        console.log(key);
        console.log(word);

        res.json(await coffeeService.searchCoffeeItem(key, word));
        log("Coffee router - get coffee by keyword", "get: /search/:key/:word", `Key: ${key}, Word: ${word}`, "", scriptName);
    } catch (e) {
        log("Coffee router - get coffee by keyword", "get: /search/:key/:word", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})

coffeeRouter.post('/', async (req, res) => {
    let {
        coffee_name,
        shots_of_espresso,
        container,
        total_calories,
        contains_milk,
        price
    }: {
        coffee_name: string,
        shots_of_espresso: number
        container: string,
        total_calories: number,
        contains_milk: boolean,
        price: number
    } = req.body;
    try {
        let coffee: Coffee = await coffeeService.saveCoffeeItem(
            new Coffee(
                0, 
                coffee_name, 
                shots_of_espresso, 
                container, 
                total_calories, 
                contains_milk, 
                price));
        res.status(201).json(coffee);
        log("Coffee router - save coffee entry", "post: /", `${req.body}`, res.statusCode, scriptName);
    } catch (e) {
        log("Coffee router - save coffee entry", "post: /", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})

coffeeRouter.post('/:id', async (req, res) => {
    let {
        coffee_name,
        shots_of_espresso,
        container,
        total_calories,
        contains_milk,
        price
    }: {
        coffee_name: string,
        shots_of_espresso: number
        container: string,
        total_calories: number,
        contains_milk: boolean,
        price: number
    } = req.body;
    const id = Number(req.params.id);
    try {
        let coffee: Coffee = await coffeeService.updateCoffeeItem(id, 
            new Coffee(
                0, 
                coffee_name, 
                shots_of_espresso, 
                container, 
                total_calories, 
                contains_milk, 
                price));
        res.status(201).json(coffee);
        log("Coffee router - update coffee entry", "post: /:id", `${req.body}`, res.statusCode, scriptName);
    } catch (e) {
        log("Coffee router - update coffee entry", "post: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})

coffeeRouter.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        
        const deletedItem = await coffeeService.deleteCoffeeItem(id)

        res.send(`Successfully deleted ${deletedItem[0].coffee_name} with ID no ${id} in database `)

        res.json(await coffeeService.deleteCoffeeItem(id));
        log("Coffee router - delete coffee entry", "delete: /:id", `ID: ${id}`, res.statusCode, scriptName);
    } catch (e) {
        log("Coffee router - delete coffee entry", "delete: /:id", "", `${e.message}`, scriptName);
        res.status(500).send(e.message)
    }
})
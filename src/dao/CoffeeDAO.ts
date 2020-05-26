import { convertToCoffeeObject } from "./../dto/CoffeeDTO"
import { Coffee } from './../model/coffee'
import { pool } from './poolDB'
import {log} from "./../utils/Logger"
var path = require('path');
var scriptName = path.basename(__filename);

export async function getCoffeeList(): Promise<Coffee[]> {
    
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Coffee");
        let output = results.rows.map(convertToCoffeeObject);
        log("DAO: Connecing to DB", "getCoffeeList", "", output, scriptName);
        return output;
    } catch (err) {
        log("DAO: Connecing to DB", "getCoffeeList", "", err, scriptName);
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function getCoffeeItem(id:number): Promise<Coffee[]> {
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Coffee WHERE id = $1", [id]);
        let output = results.rows.map(convertToCoffeeObject);
        log("DAO: Connecing to DB", "getCoffeeItem", id, output, scriptName)
        return output;
    } catch (err) {
        log("DAO: Connecing to DB", "getCoffeeItem", "", err, scriptName)
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function searchCoffeeItem(key:string, word:string): Promise<Coffee[]> {
    let client;
    try {
        client = await pool.connect();
        // const results = await client.query("SELECT * FROM Coffee WHERE $1 = $2", [key, word]);
        const results = await client.query(`SELECT * FROM Coffee WHERE ${key} = '${word}'`);
        let output = results.rows.map(convertToCoffeeObject);
        log("DAO: Connecing to DB", "searchCoffeeItem", `${key}, ${word}`, output, scriptName)
        return output;
    } catch (err) {
        log("DAO: Connecing to DB", "searchCoffeeItem", "", err, scriptName)
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function saveCoffeeItem(input: Coffee): Promise<Coffee> {
    let client;
    let newCoffee = new Coffee(0, "", 0, "", 0, false, 0);
    try {
        client = await pool.connect();
        const result = await client.query("INSERT INTO Coffee(coffee_name, \
            shots_of_espresso, \
            container, \
            total_calories, \
            contains_milk, \
            price) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;",
            [input.coffee_name,
            input.shots_of_espresso,
            input.container,
            input.total_calories,
            input.contains_milk,
            input.price]);
        let coffeeId = result.rows[0].id;
        console.table(result.rows);
        newCoffee = input
        newCoffee.id = coffeeId;
        log("DAO: Connecing to DB", "saveCoffeeItem", `Coffee`, newCoffee, scriptName);
        return newCoffee;
    } catch (e) {
        log("DAO: Connecing to DB", "saveCoffeeItem", "", e, scriptName)
        console.log(e);
    } finally {
        client && client.release();
    }
    return newCoffee;
}

export async function updateCoffeeItem(id:number, input: Coffee): Promise<Coffee> {
    let client;
    let newCoffee = new Coffee(0, "", 0, "", 0, false, 0);
    try {
        client = await pool.connect();
        const result = await client.query(
            "UPDATE Coffee SET coffee_name = $1, \
            shots_of_espresso = $2, \
            container = $3, \
            total_calories = $4, \
            contains_milk = $5, \
            price = $6 WHERE id=$7 RETURNING id;",
            [input.coffee_name,
            input.shots_of_espresso,
            input.container,
            input.total_calories,
            input.contains_milk,
            input.price, 
            id]);
        let coffeeId = result.rows[0].id;
        console.table(result.rows);
        newCoffee = input
        newCoffee.id = coffeeId;
        log("DAO: Connecing to DB", "updateCoffeeItem", `Coffee`, newCoffee, scriptName);
        return newCoffee;
    } catch (e) {
        log("DAO: Connecing to DB", "updateCoffeeItem", "", e, scriptName)
        console.log(e);
    } finally {
        client && client.release();
    }
    return newCoffee;
}

export async function deleteCoffeeItem(id:number): Promise<Coffee[]> {
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Coffee WHERE id = $1", [id]);
        // console.log(results.rows);
        let output = results.rows.map(convertToCoffeeObject);
        // console.log(output)
        let del = await client.query("DELETE FROM Coffee WHERE id = $1", [id]);
        console.log(del)
        log("DAO: Connecing to DB", "updateCoffeeItem", id, del, scriptName);
        return output;
    } catch (err) {
        log("DAO: Connecing to DB", "deleteCoffeeItem", "", err, scriptName)
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}
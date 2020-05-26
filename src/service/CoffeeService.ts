import * as coffeeDAO from "./../dao/CoffeeDAO"
import {Coffee} from "./../model/coffee"
import {log} from "./../utils/Logger"
var path = require('path');
var scriptName = path.basename(__filename);

export async function getCoffeeList():Promise<Coffee[]>{
    log("passing through coffe service", "getCoffeeList", "","Coffee[]", scriptName);
    return coffeeDAO.getCoffeeList();
}

export async function saveCoffeeItem(input:Coffee):Promise<Coffee>{
    log("passing through coffe service", "saveCoffeeItem", "Coffee","Coffee", scriptName);
    return coffeeDAO.saveCoffeeItem(input)
}

export async function getCoffeeItem(id:number):Promise<Coffee[]>{
    log("passing through coffe service", "getCoffeeItem", "ID","Coffee[]", scriptName);
    return coffeeDAO.getCoffeeItem(id);
}

export async function updateCoffeeItem(id:number, input:Coffee):Promise<Coffee>{
    log("passing through coffe service", "updateCoffeeItem", "ID, Coffee","Coffee", scriptName);
    return coffeeDAO.updateCoffeeItem(id, input);
}

export async function deleteCoffeeItem(id:number):Promise<Coffee[]>{
    log("passing through coffe service", "deleteCoffeeItem", "ID","Coffee[]", scriptName);
    return coffeeDAO.deleteCoffeeItem(id);
}

export async function searchCoffeeItem(key:string, word:string):Promise<Coffee[]>{
    log("passing through coffe service", "searchCoffeeItem", "key, word","Coffee[]", scriptName);
    return coffeeDAO.searchCoffeeItem(key, word);
}
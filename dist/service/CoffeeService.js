"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.searchCoffeeItem = exports.deleteCoffeeItem = exports.updateCoffeeItem = exports.getCoffeeItem = exports.saveCoffeeItem = exports.getCoffeeList = void 0;
const coffeeDAO = __importStar(require("./../dao/CoffeeDAO"));
const Logger_1 = require("./../utils/Logger");
var path = require('path');
var scriptName = path.basename(__filename);
function getCoffeeList() {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "getCoffeeList", "", "Coffee[]", scriptName);
        return coffeeDAO.getCoffeeList();
    });
}
exports.getCoffeeList = getCoffeeList;
function saveCoffeeItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "saveCoffeeItem", "Coffee", "Coffee", scriptName);
        return coffeeDAO.saveCoffeeItem(input);
    });
}
exports.saveCoffeeItem = saveCoffeeItem;
function getCoffeeItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "getCoffeeItem", "ID", "Coffee[]", scriptName);
        return coffeeDAO.getCoffeeItem(id);
    });
}
exports.getCoffeeItem = getCoffeeItem;
function updateCoffeeItem(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "updateCoffeeItem", "ID, Coffee", "Coffee", scriptName);
        return coffeeDAO.updateCoffeeItem(id, input);
    });
}
exports.updateCoffeeItem = updateCoffeeItem;
function deleteCoffeeItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "deleteCoffeeItem", "ID", "Coffee[]", scriptName);
        return coffeeDAO.deleteCoffeeItem(id);
    });
}
exports.deleteCoffeeItem = deleteCoffeeItem;
function searchCoffeeItem(key, word) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through coffe service", "searchCoffeeItem", "key, word", "Coffee[]", scriptName);
        return coffeeDAO.searchCoffeeItem(key, word);
    });
}
exports.searchCoffeeItem = searchCoffeeItem;

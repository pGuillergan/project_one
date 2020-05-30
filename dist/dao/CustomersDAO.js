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
const CustomerDTO_1 = require("./../dto/CustomerDTO");
const customers_1 = require("./../model/customers");
const poolDB_1 = require("./poolDB");
function getCustomersList() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Customer");
            let output = results.rows.map(CustomerDTO_1.convertToCustomersObject);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.getCustomersList = getCustomersList;
function getCustomer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Customer WHERE phone_number = $1", [id]);
            // console.log(results.rows);
            let output = results.rows.map(CustomerDTO_1.convertToCustomersObject);
            // console.log(output)
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.getCustomer = getCustomer;
function searchCustomers(key, word) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            // const results = await client.query("SELECT * FROM Coffee WHERE $1 = $2", [key, word]);
            const results = yield client.query(`SELECT * FROM Customer WHERE ${key} = '${word}'`);
            console.log(results.rows);
            let output = results.rows.map(CustomerDTO_1.convertToCustomersObject);
            console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.searchCustomers = searchCustomers;
function saveCustomer(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newCustomer = new customers_1.Customers("", "", "");
        try {
            client = yield poolDB_1.pool.connect();
            const result = yield client.query("INSERT INTO Customers(phone_number, \
            customer_name, \
            customer_address) VALUES($1, $2, $3);", [input.phone_number,
                input.customer_name,
                input.customer_address]);
            console.table(result.rows);
            newCustomer = input;
            return newCustomer;
        }
        catch (e) {
            console.log(e);
        }
        finally {
            client && client.release();
        }
        return newCustomer;
    });
}
exports.saveCustomer = saveCustomer;
function updateCustomer(phone_number, input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newCustomer = new customers_1.Customers("", "", "");
        try {
            client = yield poolDB_1.pool.connect();
            const result = yield client.query("UPDATE Customer SET phone_number = $1, \
            customer_name = $2, \
            customer_address = $3 WHERE phone_number=$4;", [input.phone_number,
                input.customer_name,
                input.customer_address, phone_number]);
            console.table(result.rows);
            newCustomer = input;
            return newCustomer;
        }
        catch (e) {
            console.log(e);
        }
        finally {
            client && client.release();
        }
        return newCustomer;
    });
}
exports.updateCustomer = updateCustomer;
function deleteCustomer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield poolDB_1.pool.connect();
            const results = yield client.query("SELECT * FROM Customers WHERE phone_number = $1", [id]);
            // console.log(results.rows);
            let output = results.rows.map(CustomerDTO_1.convertToCustomersObject);
            // console.log(output)
            let del = yield client.query("DELETE FROM Customers WHERE phone_number = $1", [id]);
            console.log(del);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.deleteCustomer = deleteCustomer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToCustomersObject = exports.CustomersDTO = void 0;
const customers_1 = require("./../model/customers");
class CustomersDTO {
    constructor(phone_number, customer_name, customer_address) {
        this.phone_number = phone_number;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
    }
}
exports.CustomersDTO = CustomersDTO;
function convertToCustomersObject(row) {
    return new customers_1.Customers(row.phone_number, row.customer_name, row.customer_address);
}
exports.convertToCustomersObject = convertToCustomersObject;

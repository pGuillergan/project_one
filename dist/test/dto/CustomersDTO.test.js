"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerDTO_1 = require("./../../dto/CustomerDTO");
describe('Testing Customer Object Conversion', () => {
    it('converts dictionary to customer object', () => {
        const input = {
            phone_number: "1112223344",
            customer_name: "Bob",
            customer_address: "124 Conch Street, Bikini Bottom, Pacific Ocean"
        };
        const output = CustomerDTO_1.convertToCustomersObject(input);
        expect(output.phone_number).toBe("1112223344");
        expect(output.customer_name).toBe("Bob");
        expect(output.customer_address).toBe("124 Conch Street, Bikini Bottom, Pacific Ocean");
    });
    it('creates new Coffee DTO object', () => {
        const customersDTO = new CustomerDTO_1.CustomersDTO("1112223344", "Bob", "124 Conch Street, Bikini Bottom, Pacific Ocean");
        expect(customersDTO.phone_number).toBe("1112223344");
        expect(customersDTO.customer_name).toBe("Bob");
        expect(customersDTO.customer_address).toBe("124 Conch Street, Bikini Bottom, Pacific Ocean");
    });
});

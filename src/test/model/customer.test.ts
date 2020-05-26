import{Customers}from "./../../model/customers";

describe( 'Testing Customers Class', ()=>{
    it('creates new Customers object', ()=>{
        const customer = new Customers("1112223344", "Bob", "124 Conch Street, Bikini Bottom, Pacific Ocean");
        expect(customer.phone_number).toBe("1112223344");
        expect(customer.customer_name).toBe("Bob");
        expect(customer.customer_address).toBe("124 Conch Street, Bikini Bottom, Pacific Ocean");
    })
})
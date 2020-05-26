import { convertToCustomersObject } from "./../dto/CustomerDTO"
import { Customers } from './../model/customers'
import { pool } from './poolDB'

export async function getCustomersList(): Promise<Customers[]> {
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Customer");
        let output = results.rows.map(convertToCustomersObject);
        return output;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function getCustomer(id:number): Promise<Customers[]> {
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Customer WHERE phone_number = $1", [id]);
        // console.log(results.rows);
        let output = results.rows.map(convertToCustomersObject);
        // console.log(output)
        return output;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function searchCustomers(key:string, word:string): Promise<Customers[]> {
    let client;
    try {
        client = await pool.connect();
        // const results = await client.query("SELECT * FROM Coffee WHERE $1 = $2", [key, word]);
        const results = await client.query(`SELECT * FROM Customer WHERE ${key} = '${word}'`);
        console.log(results.rows);
        let output = results.rows.map(convertToCustomersObject);
        console.log(output)
        return output;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}

export async function saveCustomer(input: Customers): Promise<Customers> {
    let client;
    let newCustomer = new Customers("", "", "");
    try {
        client = await pool.connect();
        const result = await client.query("INSERT INTO Customers(phone_number, \
            customer_name, \
            customer_address) VALUES($1, $2, $3);",
            [input.phone_number,
            input.customer_name,
            input.customer_address]);
        console.table(result.rows);
        newCustomer = input
        return newCustomer;
    } catch (e) {
        console.log(e);
    } finally {
        client && client.release();
    }
    return newCustomer;
}

export async function updateCustomer(phone_number:number, input: Customers): Promise<Customers> {
    let client;
    let newCustomer = new Customers("", "", "");
    try {
        client = await pool.connect();
        const result = await client.query(
            "UPDATE Customer SET phone_number = $1, \
            customer_name = $2, \
            customer_address = $3 WHERE phone_number=$4;",
            [input.phone_number,
            input.customer_name,
            input.customer_address, phone_number]);
        console.table(result.rows);
        newCustomer = input
        return newCustomer;
    } catch (e) {
        console.log(e);
    } finally {
        client && client.release();
    }
    return newCustomer;
}

export async function deleteCustomer(id:number): Promise<Customers[]> {
    let client;
    try {
        client = await pool.connect();
        const results = await client.query("SELECT * FROM Customers WHERE phone_number = $1", [id]);
        // console.log(results.rows);
        let output = results.rows.map(convertToCustomersObject);
        // console.log(output)
        let del = await client.query("DELETE FROM Customers WHERE phone_number = $1", [id]);
        console.log(del)
        return output;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return [];
}
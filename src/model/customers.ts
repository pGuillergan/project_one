export class Customers{
    phone_number:string;
    customer_name:string;
    customer_address:string;

    constructor(phone_number:string, customer_name:string, customer_address:string){
        this.phone_number = phone_number;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
    }
}
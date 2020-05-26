import { Pool } from "pg";

export const pool = new Pool({
    user: 'postgres',
    host: 'db-coffee.czeh4kvjjldj.us-west-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'password',
    port: 5432,
})
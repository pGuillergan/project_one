"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'db-coffee.czeh4kvjjldj.us-west-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

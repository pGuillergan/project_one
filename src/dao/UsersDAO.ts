import { pool } from "./poolDB";
import { Users } from "./../model/users";
import { convertToUsersObject } from "./../dto/UsersDTO";
import { isUserValid } from "./../utils/validate"

import {log} from "./../utils/Logger"
var path = require('path');
var scriptName = path.basename(__filename);

export async function validateUser(user_email: string, user_password: string): Promise<string> {
    let client;
    log("Validating the user in the DB", "make query", `${user_email}, ${user_password}`, "", scriptName);

    if (isUserValid(user_email, user_password)) {
        try {

            client = await pool.connect();
            const results = await client.query("SELECT * FROM Users WHERE user_email = $1;",[user_email]);

            let output:Users = results.rows.map(convertToUsersObject);
            
            log("Validating the user in the DB", "validateUser", "", `${output[0].user_name}, ${output[0].user_email}, ${output[0].user_password}, ${output[0].user_role}`, scriptName);

            if (output[0].user_password === user_password){
                return `Welcome ${output[0].user_name}, you are logged in as ${output[0].user_role}.  You will be redirected to main page..`;
            }else{
                return "password is incorrect";
            }
        } catch (err) {
            console.log(err);
            return "user does not exist";
        } finally {
            client && client.release();
        }
    }
    return "Not valid email/password!!!";
}
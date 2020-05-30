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
const poolDB_1 = require("./poolDB");
const UsersDTO_1 = require("./../dto/UsersDTO");
const validate_1 = require("./../utils/validate");
const Logger_1 = require("./../utils/Logger");
var path = require('path');
var scriptName = path.basename(__filename);
function validateUser(user_email, user_password) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        Logger_1.log("Validating the user in the DB", "make query", `${user_email}, ${user_password}`, "", scriptName);
        if (validate_1.isUserValid(user_email, user_password)) {
            try {
                client = yield poolDB_1.pool.connect();
                const results = yield client.query("SELECT * FROM Users WHERE user_email = $1;", [user_email]);
                let output = results.rows.map(UsersDTO_1.convertToUsersObject);
                Logger_1.log("Validating the user in the DB", "validateUser", "", `${output[0].user_name}, ${output[0].user_email}, ${output[0].user_password}, ${output[0].user_role}`, scriptName);
                if (output[0].user_password === user_password) {
                    return `Welcome ${output[0].user_name}, you are logged in as ${output[0].user_role}.  You will be redirected to main page..`;
                }
                else {
                    return "password is incorrect";
                }
            }
            catch (err) {
                console.log(err);
                return "user does not exist";
            }
            finally {
                client && client.release();
            }
        }
        return "Not valid email/password!!!";
    });
}
exports.validateUser = validateUser;

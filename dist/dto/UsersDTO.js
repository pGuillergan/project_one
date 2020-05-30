"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./../model/users");
class UsersDTO {
    constructor(user_email, user_name, user_password, user_role) {
        this.user_email = user_email;
        this.user_name = user_name;
        this.user_password = user_password;
        this.user_role = user_role;
    }
}
exports.UsersDTO = UsersDTO;
function convertToUsersObject(row) {
    return new users_1.Users(row.user_email, row.user_name, row.user_password, row.user_role);
}
exports.convertToUsersObject = convertToUsersObject;

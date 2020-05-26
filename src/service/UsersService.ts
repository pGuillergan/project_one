import * as userDAO from "./../dao/UsersDAO";
import {Users} from "./../model/users"

import {log} from "./../utils/Logger"
var path = require('path');
var scriptName = path.basename(__filename);

export async function validateUser(user_email:string, user_password:string):Promise<string>{
    log("passing through users login service", "validateUser", `${user_email}, ${user_password}`,"string", scriptName);
    return userDAO.validateUser(user_email, user_password);
}
import * as userService from "../service/UsersService"
import { Router } from 'express';

import {log} from "./../utils/Logger"
var path = require('path');
var scriptName = path.basename(__filename);

export const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    
    let {
        user_email,
        user_password,
    }: {
        user_email: string,
        user_password: string
    } = req.body;

    log("User login route", "post: /", `${user_email}, ${user_password}`, "", scriptName);

    let confirmation = await userService.validateUser(user_email, user_password);

    // if(confirmation = "Log-in successful, you will be redirected to main page.."){
    //     req!.session!.user = true;
    // }

    log("User login route", "post: /", "", confirmation, scriptName);
    res.send(confirmation);
})

usersRouter.post('/logout', async (req, res) => {
    
    log("User login out", "post: /", "", "", scriptName);
    
    req!.session!.user = false;

    res.send("User has logged out");
})
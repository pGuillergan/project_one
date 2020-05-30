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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService = __importStar(require("../service/UsersService"));
const express_1 = require("express");
const Logger_1 = require("./../utils/Logger");
var path = require('path');
var scriptName = path.basename(__filename);
exports.usersRouter = express_1.Router();
exports.usersRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user_email, user_password, } = req.body;
    Logger_1.log("User login route", "post: /", `${user_email}, ${user_password}`, "", scriptName);
    let confirmation = yield userService.validateUser(user_email, user_password);
    Logger_1.log("User login route", "post: /", "", confirmation, scriptName);
    res.send(confirmation);
}));
exports.usersRouter.post('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Logger_1.log("User login out", "post: /", "", "", scriptName);
    res.send("User has logged out");
}));

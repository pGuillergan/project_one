"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./utils/config");
const CoffeeRouter_1 = require("./router/CoffeeRouter");
const UsersRouter_1 = require("./router/UsersRouter");
const LoggingMiddleware_1 = require("./middleware/LoggingMiddleware");
const SessionMiddleware_1 = require("./middleware/SessionMiddleware");
const Logger_1 = require("./utils/Logger");
const cors_1 = __importDefault(require("cors"));
var path = require('path');
var scriptName = path.basename(__filename);
var fs = require('fs');
var morgan = require('morgan');
Logger_1.log("Set up connections", "none", "none", "none", scriptName);
//set up connection 
const bodyParser = require('body-parser');
exports.app = express_1.default();
exports.app.use(cors_1.default());
Logger_1.log("Set up middleware", "none", "none", "none", scriptName);
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
exports.app.use(morgan('combined', { stream: accessLogStream }));
exports.app.use(bodyParser.json());
exports.app.use(LoggingMiddleware_1.loggingMiddleware);
exports.app.use(SessionMiddleware_1.sessionMiddleware);
exports.app.use('/coffee', CoffeeRouter_1.coffeeRouter);
exports.app.use('/auth', UsersRouter_1.usersRouter);
Logger_1.log("Set up port listener", "app.listen", `port# ${config_1.PORT}`, "none", scriptName);
// comment out when testing endpoint
exports.app.listen(config_1.PORT, () => {
    console.log(`App running on port ${config_1.PORT}.`);
});

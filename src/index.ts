
import express from 'express'
import { PORT } from "./utils/config"
import { coffeeRouter } from "./router/CoffeeRouter"
import { usersRouter } from "./router/UsersRouter"
import { loggingMiddleware } from './middleware/LoggingMiddleware'
import { sessionMiddleware } from './middleware/SessionMiddleware'
import {log} from "./utils/Logger";
var path = require('path');
var scriptName = path.basename(__filename);
var fs = require('fs');

var morgan = require('morgan');
log("Set up connections", "none", "none", "none", scriptName)
//set up connection 
const bodyParser = require('body-parser');
export const app = express();

log("Set up middleware", "none", "none", "none", scriptName)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
var accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json());
app.use(loggingMiddleware)
app.use(sessionMiddleware)

app.use('/coffee', coffeeRouter);
app.use('/auth', usersRouter);

log("Set up port listener", "app.listen", `port# ${PORT}`, "none", scriptName)
// comment out when testing endpoint
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})

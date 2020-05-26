"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingMiddleware = void 0;
function loggingMiddleware(req, res, next) {
    let dateTime = new Date();
    console.log("");
    console.log(`Timestamp: ${dateTime}`);
    console.log(`Request url is \'${req.url}\' and Request Method is ${req.method}`);
    console.log(`Status is ${res.statusCode}`);
    console.log("");
    next();
}
exports.loggingMiddleware = loggingMiddleware;

import {Request, Response, NextFunction} from 'express';

export function loggingMiddleware(req:Request, res:Response, next:NextFunction){

    let dateTime = new Date()
    console.log("")
    console.log(`Timestamp: ${dateTime}`)
    console.log(`Request url is \'${req.url}\' and Request Method is ${req.method}`)
    console.log(`Status is ${res.statusCode}`)
    console.log("")
    
    next();
}

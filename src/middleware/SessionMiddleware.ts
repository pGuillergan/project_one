import session from 'express-session';

const sessionConfig = {
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
};

export const sessionMiddleware = session(sessionConfig); 





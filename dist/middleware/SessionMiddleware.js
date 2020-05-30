"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const sessionConfig = {
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
};
exports.sessionMiddleware = express_session_1.default(sessionConfig);

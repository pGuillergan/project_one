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
const userDAO = __importStar(require("./../dao/UsersDAO"));
const Logger_1 = require("./../utils/Logger");
var path = require('path');
var scriptName = path.basename(__filename);
function validateUser(user_email, user_password) {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.log("passing through users login service", "validateUser", `${user_email}, ${user_password}`, "string", scriptName);
        return userDAO.validateUser(user_email, user_password);
    });
}
exports.validateUser = validateUser;

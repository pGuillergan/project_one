"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserValid = void 0;
function isUserValid(user_email, user_password) {
    const valid_email = typeof user_email == 'string' &&
        user_email.trim() != '';
    const valid_password = typeof user_password == 'string' &&
        user_password.trim() != '' &&
        user_password.trim().length > 0;
    return valid_email && valid_password;
}
exports.isUserValid = isUserValid;

export function isUserValid(user_email, user_password):boolean {
    const valid_email = typeof user_email == 'string' &&
        user_email.trim() != '';
    const valid_password = typeof user_password == 'string' &&
        user_password.trim() != '' &&
        user_password.trim().length > 0;

    return valid_email && valid_password;
}
import { Users } from "./../model/users";

export class UsersDTO {
    user_email:string;
    user_name: string;
    user_password: string;
    user_role: string;
    constructor(user_email:string, user_name: string, user_password: string, user_role: string) {
        this.user_email = user_email;
        this.user_name = user_name;
        this.user_password = user_password;
        this.user_role = user_role;
    }
}

export function convertToUsersObject(row:UsersDTO):Users{
    return new Users(row.user_email, row.user_name, row.user_password, row.user_role);
}
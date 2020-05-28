export class Users{
    user_email:string;
    user_name:string;
    user_password:string;
    user_role:string;
    
    constructor(user_email:string, user_name:string, user_password:string, user_role:string){
        this.user_email = user_email;
        this.user_name = user_name;
        this.user_password = user_password;
        this.user_role = user_role;
    }
}
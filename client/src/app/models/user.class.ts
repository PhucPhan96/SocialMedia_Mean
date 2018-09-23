export class User{
    public id : String;
    public username : String;
    public password : String;
    public email : String;
    public age : Number;

    constructor(id : string, username : string, password : string, email : string, age : number){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
    }
}
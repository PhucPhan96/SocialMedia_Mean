export class User {
    id: String;
    firstname: String;
    lastname: String;
    username: String;
    password: String;
    email: String;
    address: String;
    gender: String;
    birthday: Date;
    about: String;
    phone: String;
    job: String;
    avatarpath: String;
    coverpath: String

    constructor() {
        this.id = "";
        this.firstname = "";
        this.lastname = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.address = "";
        this.gender = "";
        this.about = "";
        this.phone = "";
        this.job = "";
        this.avatarpath = "";
        this.coverpath = ""
    }
}
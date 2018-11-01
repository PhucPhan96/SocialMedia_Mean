import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { User } from './../../models/user.class';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public subscription: Subscription;

  public user: User[] = [];
  constructor(public loginService: LoginService, private router : Router) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log(this.username + this.password);
    this.subscription = this.loginService.login(this.username).subscribe(data => {
      this.user = data;
      if (JSON.parse(JSON.stringify(this.user)).password == this.password) {
        console.log("Đăng nhập thành công!");
        this.router.navigateByUrl('/home');
      }
      else {
        console.log("Đăng nhập thất bại!");
        this.password = "";
      }
    }, error => {
      console.log(error);
    });
  }

  login(){
    this.router.navigateByUrl('/home');
  }
}

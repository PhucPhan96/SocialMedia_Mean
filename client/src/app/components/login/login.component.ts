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
  public status : string = "";
  public subscription: Subscription;

  public user: User[] = [];
  constructor(public loginService: LoginService, private router : Router) { }

  ngOnInit() {
  }

  checkLogin() {
    this.subscription = this.loginService.getUserByUsername(this.username).subscribe(data => {
      this.user = data;
      if (this.user[0].password == this.password) {
        // this.success = true;
        this.status = "Xin Chào! Bạn đã đăng nhập thành công.";
        console.log("Đăng nhập thành công!");
      }
      else {
        // this.success = false;
        this.status = "Đăng nhập thất bại. Vui lòng thử lại!";
        console.log("Đăng nhập thất bại!");
      }
    }, error => {
      console.log(error);
    });
  }

  login(){
    this.router.navigateByUrl('/home');
  }
}

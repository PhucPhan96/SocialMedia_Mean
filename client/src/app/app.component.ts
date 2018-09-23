import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';
import { User } from './models/user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Social';

  public subscription : Subscription;
  public users : User[] = [];

  constructor(public loginService : LoginService){

  }

  ngOnInit(){
    this.LoadData();
  }

  LoadData(){
    this.subscription = this.loginService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users)
    }, error => {
      console.log(error);
    })
  }

  ngOnDestroy(){

  }
}

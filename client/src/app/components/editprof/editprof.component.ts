import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprof',
  templateUrl: './editprof.component.html',
  styleUrls: ['./editprof.component.css']
})
export class EditprofComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  editBasic(){
    this.router.navigateByUrl("/editprof/basicInfo");
  }

  changePass(){
    this.router.navigateByUrl("/editprof/changePass");
  }
}

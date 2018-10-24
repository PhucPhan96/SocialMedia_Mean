import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    $(function () {
      $('.list-group').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
  }

  editProf(){
    this.router.navigateByUrl('/editprof/basicInfo');
  }
}

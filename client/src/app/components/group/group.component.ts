import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  createEvent(){
    this.router.navigateByUrl('/groupdetail/createEvent');
  }
}

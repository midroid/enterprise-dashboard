import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.css']
})
export class Dashboard implements OnInit {
  
 constructor(public router: Router) {
 }

 ngOnInit() {
   
 }

}

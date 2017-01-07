import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './landing.template.html',
  styleUrls: ['./landing.style.css']
})
export class Landing {
  
  public toggleSmallMenuView : boolean;
  
  constructor(private route: ActivatedRoute) {
    this.toggleSmallMenuView = false;
    this.anchorClicked();
  }
  
  toggleFunction() {
    this.anchorClicked();
    this.toggleSmallMenuView = !this.toggleSmallMenuView;
  }
  
  anchorClicked() {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f );
      if ( element ) element.scrollIntoView ( element );
    });
  }
  
}

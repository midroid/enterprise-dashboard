import {Component, OnInit, Directive, Output, Input, EventEmitter, SimpleChange, ViewEncapsulation} from '@angular/core';
import {Router, RouterLink, ActivatedRoute} from '@angular/router';
import {CanDeactivate} from '@angular/router';
import {Location} from '@angular/common';

declare var moment : any;

@Component({
    selector: 'dashboard-sidebar',
    templateUrl: './dashboard-sidebar.template.html',
    styleUrls: ['./dashboard-sidebar.style.css'],
    providers: [Location]
})

export class DashboardSidebarComponent implements OnInit { 
    
    constructor(public _router : Router,
                public location : Location,
                public _activatedRoute : ActivatedRoute,
                ) {
    }
                
    ngOnInit() {
    }
}
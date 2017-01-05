import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CanDeactivate} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {MdIcon, MdIconRegistry} from '@angular/material';
declare var moment : any;

@Component({
    selector: 'dashboard-header',
    templateUrl: './dashboard-header.template.html',
    styleUrls: ['./dashboard-header.style.css'],
    providers: [MdIconRegistry]
})

export class DashboardHeaderComponent {

    constructor (
        private _http : Http,
        private router : Router) {
    }

    logout() {
    }
    
}
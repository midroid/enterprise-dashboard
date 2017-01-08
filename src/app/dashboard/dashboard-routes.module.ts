import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard';
import { D3showcaseComponent } from '../modules/d3showcase/d3showcase.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'd3',
        component: D3showcaseComponent
      },
      {
        path: '',
        redirectTo: 'd3',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports : [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class DashboardRoutesModule { }
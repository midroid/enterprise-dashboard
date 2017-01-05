import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
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
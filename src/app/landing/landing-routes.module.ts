import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Landing } from './landing';

const landingRoutes: Routes = [
  {
    path: 'landing',
    component: Landing
  }
];

@NgModule({
  imports : [
    RouterModule.forChild(landingRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class LandingRoutesModule { }
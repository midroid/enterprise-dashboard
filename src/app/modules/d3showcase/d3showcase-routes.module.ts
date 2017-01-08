import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { D3showcaseComponent } from './d3showcase.component';

const d3showcaseRoutes: Routes = [
  {
    path: '',
    component: D3showcaseComponent,
  }
];

@NgModule({
  imports : [
    RouterModule.forChild(d3showcaseRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class D3showcaseRoutesModule { }
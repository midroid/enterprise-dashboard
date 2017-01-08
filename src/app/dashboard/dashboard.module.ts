import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { Dashboard } from './dashboard';
import { DashboardHeaderComponent } from './header';
import { DashboardSidebarComponent } from './sidebar';

import { DashboardRoutesModule } from './dashboard-routes.module';
import { D3showcaseModule } from '../modules/d3showcase';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    DashboardRoutesModule,
    MaterialModule,
    D3showcaseModule
  ],
  declarations: [
    Dashboard,
    DashboardHeaderComponent,
    DashboardSidebarComponent
  ],
  providers: [
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}
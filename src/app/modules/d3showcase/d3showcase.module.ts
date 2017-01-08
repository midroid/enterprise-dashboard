import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3showcaseComponent } from './d3showcase.component';
import { AreaChartComponent } from '../area-chart/area-chart.component';
import { D3showcaseRoutesModule } from './d3showcase-routes.module';

@NgModule({
  imports: [
    CommonModule,
    D3showcaseRoutesModule
  ],
  declarations: [
    D3showcaseComponent,
    AreaChartComponent
  ]
})
export class D3showcaseModule { }

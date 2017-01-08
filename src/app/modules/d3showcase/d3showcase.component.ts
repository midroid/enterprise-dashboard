import { Component, OnInit } from '@angular/core';
import { AreaChartConfig } from '../area-chart/area-chart-config';

@Component({
  selector: 'app-d3showcase',
  templateUrl: './d3showcase.component.html',
  styleUrls: ['./d3showcase.component.css'],
  entryComponents: [ D3showcaseComponent ]
})
export class D3showcaseComponent implements OnInit {

  private areaChartConfig: Array<AreaChartConfig>;

  constructor() { }

  ngOnInit() {
    this.setUp();
  }

  setUp() {
    this.areaChartConfig = new Array<AreaChartConfig>();
    let customerIncomeArea: AreaChartConfig = {
      settings: {
        fill: 'rgba(1, 67, 163, 1)',
        interpolation: 'monotone'
  }, dataset: [
    {
        x: new Date("2016-04-20T21:18:26.842Z"),
        y: 0
      },
      {
        x: new Date("2016-05-21T21:18:26.842Z"),
        y: 10
      },
      {
        x: new Date("2016-06-20T21:18:26.842Z"),
        y: 15
      },
      {
        x: new Date("2016-07-21T21:18:26.842Z"),
        y: 5
    }

  ]
    };
    this.areaChartConfig.push(customerIncomeArea);
  }

}

import { Component, 
  OnInit, 
  OnChanges, 
  AfterViewInit, 
  Input, 
  ElementRef, 
  ViewChild } from '@angular/core';
import { AreaChartConfig } from './area-chart-config';
import * as D3 from 'd3';
import * as Moment from 'moment';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() config: Array<AreaChartConfig>;
  @ViewChild('container') element: ElementRef;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private HTMLElement: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.HTMLElement  = this.element.nativeElement;
    this.host         = D3.select(this.HTMLElement);
    this.setup();
    this.buildSVG();
    this.populate();
    this.drawXAxis();
    this.drawYAxis();
  }

  ngOnChanges(): void {
    if (!this.config || this.config.length === 0 || !this.host) return;
    this.setup();
    this.buildSVG();
    this.populate();
    this.drawXAxis();
    this.drawYAxis();
  }

  private setup(): void {
    this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
    this.width = this.HTMLElement.clientWidth - this.margin.left - this.margin.right;
    this.height = this.width * 0.5 - this.margin.top -this.margin.bottom;
    this.xScale = D3.scaleTime().range([0, this.width]);
    this.yScale = D3.scaleLinear().range([this.height, 0]);
  }

  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private drawXAxis(): void {
    this.xAxis = D3.axisBottom(this.xScale)
      .tickFormat(t => Moment(t).format('MMM').toUpperCase())
      .tickPadding(15);
    this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, ' + this.height + ')')
      .call(this.xAxis);
  }

  private drawYAxis(): void {
    this.yAxis = D3.axisLeft(this.yScale)
      .tickPadding(10);
    this.svg.append('g')
      .attr('class', 'y axis')
      .call(this.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)');
  }

  private getMaxY(): number {
    let maxValuesOfAreas = [];
    this.config.forEach(data => maxValuesOfAreas.push(Math.max.apply(Math, data.dataset.map(d => d.y))));
    return Math.max(...maxValuesOfAreas);
  }  

  private populate(): void {
    this.config.forEach((area: any) => {
      this.xScale.domain(D3.extent(area.dataset, (d: any) => d.x));
      this.yScale.domain([0, this.getMaxY()]);
      this.svg.append('path')
        .datum(area.dataset)
        .attr('class', 'area')
        .style('fill', area.settings.fill)
        .attr('d', D3.area()
          .x((d: any) => this.xScale(d.x))
          .y0(this.height)
          .y1((d: any) => this.yScale(d.y)));
    });
  }

}

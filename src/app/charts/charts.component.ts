import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../data';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() selected: string;
  @Input() color  ;
  single: any[];
  view: any[] = [500, 200];

   // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
     // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


  constructor() {Object.assign (this , {single}); }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color, Colors, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import {AttendanceStatusService} from './attendance-status.service'
@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  products:any;
  data1:any;
  present!:any;
  lop!:any;
  leave!:any;

  doughnutChartData: MultiDataSet = [
  ];
  constructor(private dataService: AttendanceStatusService,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    }
   }
    ngOnInit() {
      this.dataService.sendGetRequest().subscribe(data=>{
          this.products=data;
          this.data1= JSON.parse(this.products);
          this.present=this.data1[2].Present;
          this.lop=this.data1[2].Lop;
          this.leave=this.data1[2].Leave;
          this.doughnutChartData=[this.present,this.lop,this.leave]
      })}

  public doughnutChartColors: Color[] = [{
    backgroundColor: ['#f4862c', '#d41148', '#6f2277']
   }];

  doughnutChartLabels: Label[] = ['Present','LOP', 'Leave']; 
  doughnutChartType: ChartType = 'doughnut';
  // public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
  //   beforeDraw(chart) {
  //     const ctx = chart.ctx;
  //     const txt = 'Center Text';
  //     const sidePadding = 60;
  //     const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  //     const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
  //     //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  //     const stringWidth = ctx.measureText(txt).width;
  //     const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  //     const widthRatio = elementWidth / stringWidth;
  //     const newFontSize = Math.floor(30 * widthRatio);
  //     const elementHeight = (chart.innerRadius * 2);
  //     const fontSizeToUse = Math.min(newFontSize, elementHeight);
  //     ctx.font = fontSizeToUse + 'px Arial';
  //     ctx.fillStyle = 'blue';
  //     ctx.fillText('Center Text', centerX, centerY);
  //   }
  // }];
}
